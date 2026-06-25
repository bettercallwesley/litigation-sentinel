import { NextRequest, NextResponse } from "next/server";

/**
 * D1: server-owned first-touch attribution.
 *
 * Sets the first-party `ls_attribution` cookie on the first request that
 * carries utm params or an external referrer. First-touch wins: the cookie is
 * written only when absent, never overwritten. Not httpOnly so the client
 * (src/lib/attribution.ts getAttribution) can read it; localStorage is a
 * mirror only.
 */

const ATTRIBUTION_COOKIE = "ls_attribution";
const MAX_AGE_SECONDS = 90 * 24 * 60 * 60; // 90 days

/**
 * Password gate for the unlisted CaseGlide GTM journey tour.
 *
 * Clean share URL is `/the-machine`; the content lives at an unguessable
 * static path that the gate rewrites to once the password is correct. Both the
 * clean URL and the static path are gated, so the page cannot be reached by
 * guessing either one. Password is low-bar by design (this is a marketing
 * leave-behind, not secret material): any username, password must match.
 */
const GATE_PASSWORD = "1234";
const GATE_CLEAN_PATH = "/the-machine";
const GATE_CONTENT_PATH = "/_gtm/the-machine.880de6.html";
const GATE_PATHS = new Set([GATE_CLEAN_PATH, GATE_CONTENT_PATH]);

function passwordOk(req: NextRequest): boolean {
  const auth = req.headers.get("authorization");
  if (!auth || !auth.startsWith("Basic ")) return false;
  try {
    const decoded = atob(auth.slice(6));
    return decoded.slice(decoded.indexOf(":") + 1) === GATE_PASSWORD;
  } catch {
    return false;
  }
}

function passwordPrompt(): NextResponse {
  return new NextResponse("This page is private. Enter the password to continue.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="CaseGlide GTM tour", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

function externalReferrer(req: NextRequest): string | null {
  const referer = req.headers.get("referer");
  if (!referer) return null;
  try {
    const refHost = new URL(referer).hostname.replace(/^www\./, "");
    const ownHost = req.nextUrl.hostname.replace(/^www\./, "");
    return refHost && refHost !== ownHost ? referer : null;
  } catch {
    return null;
  }
}

export function middleware(req: NextRequest) {
  // Password gate runs before attribution. Gated paths never set the cookie.
  if (GATE_PATHS.has(req.nextUrl.pathname)) {
    if (!passwordOk(req)) return passwordPrompt();
    if (req.nextUrl.pathname === GATE_CLEAN_PATH) {
      return NextResponse.rewrite(new URL(GATE_CONTENT_PATH, req.url));
    }
    return NextResponse.next();
  }

  const res = NextResponse.next();

  // First-touch wins: never overwrite an existing attribution cookie.
  if (req.cookies.has(ATTRIBUTION_COOKIE)) return res;

  const params = req.nextUrl.searchParams;
  const utm: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }
  const referrer = externalReferrer(req);

  // Only set the cookie on a request carrying utm params or an external referrer.
  if (Object.keys(utm).length === 0 && !referrer) return res;

  const attribution = {
    ...utm,
    ...(referrer ? { referrer_first: referrer } : {}),
    landing_page: req.nextUrl.pathname,
    first_touch_at: new Date().toISOString(),
  };

  res.cookies.set(ATTRIBUTION_COOKIE, encodeURIComponent(JSON.stringify(attribution)), {
    maxAge: MAX_AGE_SECONDS,
    sameSite: "lax",
    httpOnly: false,
    path: "/",
  });

  return res;
}

export const config = {
  // Page requests only; skip API routes, Next internals, and static assets.
  matcher: ["/((?!api|_next/static|_next/image|favicon\\.ico|fonts|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|txt|xml|json)).*)"],
};

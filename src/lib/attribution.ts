/**
 * First-touch attribution reader (D1).
 *
 * The source of truth is the first-party `ls_attribution` cookie set by
 * src/middleware.ts on the first request carrying utm params or an external
 * referrer (first-touch wins, the middleware never overwrites it).
 * localStorage holds a mirror only, used as a fallback when the cookie is
 * unreadable. Safari ITP caps script-writable storage at 7 days, which is why
 * the cookie is server-set and the mirror is never authoritative.
 */

export const ATTRIBUTION_COOKIE = "ls_attribution";
const MIRROR_KEY = "ls_attribution";

export interface Attribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer_first?: string;
  landing_page?: string;
  first_touch_at?: string;
}

function readCookie(): Attribution | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${ATTRIBUTION_COOKIE}=`));
  if (!match) return null;
  const raw = match.slice(ATTRIBUTION_COOKIE.length + 1);
  // The value is JSON, possibly URL-encoded once or twice depending on the
  // cookie serializer. Try each decoding depth until one parses.
  for (const candidate of [raw, safeDecode(raw), safeDecode(safeDecode(raw))]) {
    if (!candidate) continue;
    try {
      const parsed = JSON.parse(candidate);
      if (parsed && typeof parsed === "object") return parsed as Attribution;
    } catch {
      // try the next decoding depth
    }
  }
  return null;
}

function safeDecode(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return "";
  }
}

function readMirror(): Attribution | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(MIRROR_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? (parsed as Attribution) : null;
  } catch {
    return null;
  }
}

function writeMirror(attribution: Attribution): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(MIRROR_KEY, JSON.stringify(attribution));
  } catch {
    // Storage may be unavailable (private mode, partitioned webview). Mirror only.
  }
}

/**
 * Returns the first-touch attribution for this visitor.
 * Cookie first; localStorage mirror as fallback; empty object when neither exists.
 */
export function getAttribution(): Attribution {
  const fromCookie = readCookie();
  if (fromCookie) {
    writeMirror(fromCookie);
    return fromCookie;
  }
  return readMirror() || {};
}

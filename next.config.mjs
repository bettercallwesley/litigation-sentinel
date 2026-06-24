/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Superseded 2026-05-15 Montgomery FAAAA piece → 2026-05-19 Kavanaugh-cascade v3
      {
        source: "/article/scotus-montgomery-faaaa-preemption-dies",
        destination: "/article/montgomery-kavanaugh-cascade",
        permanent: true,
      },
      // Renamed 2026-06-24: the interactive conversion demo (formerly the random
      // "briefing/lit-intel-cbe45edf" slug) is now the Litigation Intelligence
      // Command Center. TEMPORARY (307) on purpose. The old link still lands in
      // already-sent prospect emails, the page is noindex so there is no SEO
      // reason to prefer a permanent redirect, and a permanent (308) would get
      // hard-cached and be hard to reverse.
      {
        source: "/briefing/lit-intel-cbe45edf",
        destination: "/command-center",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

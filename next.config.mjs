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
    ];
  },
};

export default nextConfig;

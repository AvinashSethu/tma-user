/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig = {
  transpilePackages: ["mui-one-time-password-input"],
  // Any other configurations you need
};

export default withPWA(nextConfig);

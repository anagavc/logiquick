/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      "pk_test_51L55AVLWy6VIx3BFpE3XvMg8anotWAGRRbYq1EJPUB2sIfLSz5iKNbIwYtHo1ltutBtzhHwZxExD5S8B46NHoE7H00YUizf8Gg",
    STRIPE_SECRET_KEY:
      "sk_test_51L55AVLWy6VIx3BFsQ0hAaH7gRTFXuCXRDRxVMvCD1NVe4mCPUcovqZM0daRhy0VHAA90QdbtMM8nQuIn5J6Ji0N00m61UMMlH",
  },
};

module.exports = nextConfig;

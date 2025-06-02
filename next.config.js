/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      },
    ],
  },
};

module.exports = nextConfig;

// MONGO=mongodb+srv://sohaumghosh:sohaumghosh@cluster0.gcduaks.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0

// GOOGLE_CLIENT_ID=499113140558-bb0u37qs0ksm7asb2cmkogvs95pd896o.apps.googleusercontent.com
// GOOGLE_CLIENT_SECRET=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

// NEXTAUTH_SECRET="sohaumghosh"
// NEXTAUTH_URL=http://localhost:3000

// GITHUB_ID=Ov23liTiIrL1wUPKDJtu
// GITHUB_SECRET=45a58b4867d646a2d6796492ff631ba6e19f728a

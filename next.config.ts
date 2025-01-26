import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    compiler: {
      styledComponents: true, // Ativa o suporte nativo ao styled-components
    },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  serverExternalPackages: [
    "@runwayml/avatars-node-rpc",
    "@livekit/rtc-node",
    "@livekit/rtc-ffi-bindings",
    "@livekit/rtc-ffi-bindings-darwin-arm64",
  ],
};

export default nextConfig;

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Glass Effect",
    short_name: "Glass Effect",
    description: "Glass Effect",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/glass-effect/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

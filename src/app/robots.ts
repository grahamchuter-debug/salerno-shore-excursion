import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { IS_PREVIEW } from "@/lib/runtime";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (IS_PREVIEW) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}

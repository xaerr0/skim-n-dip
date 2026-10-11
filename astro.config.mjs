import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.skimndipllc.com",
  // Ship pages as /concord-weekly-pool-service.html so Cloudflare Pages serves them at
  // /concord-weekly-pool-service, the exact URLs the Wix site has indexed.
  build: { format: "file", inlineStylesheets: "always" },
  trailingSlash: "never",
});

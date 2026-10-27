import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// No incremental cache override: every page is prerendered at build time and
// the site has no ISR, so it needs no R2 bucket (keeps it on the free plan).
export default defineCloudflareConfig({});

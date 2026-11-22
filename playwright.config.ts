import { defineConfig } from "@playwright/test";

// `npm run test:e2e` builds first, then runs these against `next start`.
export default defineConfig({
  testDir: "tests",
  timeout: 30_000,
  use: { baseURL: "http://127.0.0.1:3100" },
  webServer: {
    command: "npx next start -p 3100",
    url: "http://127.0.0.1:3100",
    reuseExistingServer: !process.env.CI,
    env: { WAITLIST_DRY_RUN: "1" },
    timeout: 60_000,
  },
});

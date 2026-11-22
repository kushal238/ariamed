import { expect, test } from "@playwright/test";

test.describe("front page", () => {
  test("leads with the claim and links to every section", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("The prescription, finally kept.");
    for (const id of ["visit", "doctors", "patients", "access"]) {
      await expect(page.locator(`#${id}`)).toHaveCount(1);
    }
    await expect(page.getByRole("link", { name: "Sign in" })).toHaveAttribute("href", /platform\.ariamed\.ai/);
    await expect(page.getByText("Data stays in India.")).toBeVisible();
  });

  test("the hero demo plays through to a finished prescription", async ({ page }) => {
    await page.goto("/");
    const demo = page.locator("[data-demo-step]");
    await expect(demo).toHaveAttribute("data-demo-complete", "false");
    await expect(demo).toHaveAttribute("data-demo-complete", "true", { timeout: 15_000 });
    await expect(demo.getByText("Ready for your signature")).toBeVisible();
    // and loops: it goes back to the start after the hold
    await expect(demo).toHaveAttribute("data-demo-complete", "false", { timeout: 10_000 });
  });

  test("with reduced motion the prescription is shown finished, without looping", async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: "reduce" });
    const page = await context.newPage();
    await page.goto("/");
    const demo = page.locator("[data-demo-step]");
    await expect(demo).toHaveAttribute("data-demo-complete", "true");
    await page.waitForTimeout(1500);
    await expect(demo).toHaveAttribute("data-demo-complete", "true");
    await context.close();
  });

  test("does not scroll sideways on a phone", async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    await page.goto("/");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    await context.close();
  });
});

test.describe("access request", () => {
  test("confirms the address after a successful request", async ({ page }) => {
    await page.goto("/");
    await page.locator("#access input[type=email]").fill("doctor@clinic.in");
    await page.locator("#access button[type=submit]").click();
    await expect(page.locator("#access [role=status]")).toContainText("doctor@clinic.in");
  });

  test("says so when the request fails", async ({ page }) => {
    await page.route("**/api/waitlist", (route) => route.fulfill({ status: 500, body: "{}" }));
    await page.goto("/waitlist");
    await page.locator("input[type=email]").fill("doctor@clinic.in");
    await page.locator("button[type=submit]").click();
    await expect(page.locator("form [role=alert]")).toContainText("didn't go through");
  });

  test("the API rejects bad input and accepts a plain email", async ({ request }) => {
    expect((await request.post("/api/waitlist", { data: { email: "not-an-email" } })).status()).toBe(400);
    expect((await request.post("/api/waitlist", { data: "nope", headers: { "Content-Type": "application/json" } })).status()).toBe(400);
    const ok = await request.post("/api/waitlist", { data: { email: "doctor@clinic.in", name: "Dr Sharma" } });
    expect(ok.status()).toBe(200);
    expect(await ok.json()).toEqual({ success: true });
  });
});

test("privacy and 404 pages share the site chrome", async ({ page }) => {
  await page.goto("/privacy");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Privacy Policy");
  await expect(page.getByRole("link", { name: "Request access" })).toBeVisible();
  const missing = await page.goto("/nothing-here");
  expect(missing?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("nothing at this address");
});

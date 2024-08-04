const { test, expect} = require('@playwright/test');

test('Browser Context test', async ({ browser }) => {
  
    const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto('https://playwright.dev/');
  //Expect a title "to contain" a substring.
 await expect(page).toHaveTitle(/Playwright/);
});

test('Test without browser context', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  await expect(page).toHaveTitle(/Playwright/)
});

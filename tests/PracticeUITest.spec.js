const { test, expect} = require('@playwright/test');


test('Login Scenario and Check dashboard', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator("input[name='username']").isVisible();
  await page.locator("input[name='username']").fill("Admin");
  await page.locator("input[placeholder='password']").fill("admin123");
  await page.locator("button[type='submit']").click();
  expect(await page.locator("div[class='oxd-topbar-header-userarea']")).toBeVisible();
 const textDetails= await page.locator("span[class='oxd-topbar-header-breadcrumb']>h6").textContent();
 console.log("Title is:" ,textDetails);
});

test('Timesheet functionality', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator("input[name='username']").isVisible();
  await page.locator("input[name='username']").fill("Admin");
  await page.locator("input[placeholder='password']").fill("admin123");
  await page.locator("button[type='submit']").click();
  expect(await page.locator("div[class='oxd-topbar-header-userarea']")).toBeVisible();
 const textDetails= await page.locator("span[class='oxd-topbar-header-breadcrumb']>h6").textContent();
 console.log("Title is:" ,textDetails);
 await page.locator('span:has-text("Time")').click();
 await page.locator("span[class='oxd-topbar-header-breadcrumb']").isVisible();
 const pageDashboard=await page.locator("span[class='oxd-topbar-header-breadcrumb']>h6").first().textContent();
 expect(pageDashboard=="Time");
 console.log("Page title is:",await page.title());
});


test.only('Recruitment functionality', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator("input[name='username']").isVisible();
  await page.locator("input[name='username']").fill("Admin");
  await page.locator("input[name='password']").fill("admin123");
  await page.locator("button[type='submit']").click();
  expect(await page.locator("div[class='oxd-topbar-header-userarea']")).toBeVisible();
  expect.soft(await page.locator("div[class='oxd-topbar-header-userarea']")).toBeVisible();
 const textDetails= await page.locator("span[class='oxd-topbar-header-breadcrumb']>h6").textContent();
 console.log("Title is:" ,textDetails);
 await page.locator('span:has-text("Recruitment")').click();
 await page.locator("span[class='oxd-topbar-header-breadcrumb']").isVisible();
 const pageDashboard=await page.locator("span[class='oxd-topbar-header-breadcrumb']>h6").first().textContent();
 expect(pageDashboard=="Recruitment");
 console.log("Page title is:",await page.title());
await page.locator('button:has-text(" Add ")').click();
await page.locator("input[name='firstName']").fill("Test123");
});
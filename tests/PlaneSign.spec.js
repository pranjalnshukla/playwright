import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.plane.so/');
  await page.getByPlaceholder('Enter your email address...').click();
  await page.getByPlaceholder('Enter your email address...').fill('pshuklaplanit@gmail.com');
  await page.getByRole('button', { name: 'Send sign in code' }).click();
  await page.getByPlaceholder('Enter code...').click();
  await page.getByPlaceholder('Enter code...').click();
  await page.getByPlaceholder('Enter code...').click();
});
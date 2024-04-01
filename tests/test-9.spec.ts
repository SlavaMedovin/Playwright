import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://cloudtesting.contosotraders.com/');
  await page.getByText('$599').click();
  await page.getByRole('button', { name: 'Explore Other Products' }).click();
  await page.getByRole('img', { name: 'ASUS Vivobook 14 OLED, 12th' }).click();
  await page.getByRole('button', { name: 'Add To Bag' }).click();
  await page.getByLabel('cart').click();

  await page.getByRole('link', { name: 'Remove' }).click();
  await expect(page.getByRole('heading', { name: 'Your Cart is empty' })).toBeVisible();
});
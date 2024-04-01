import { test, expect } from '@playwright/test';

test('cart 1 check', async ({ page }) => {
  await page.goto('https://cloudtesting.contosotraders.com/');

  await page.getByRole('button', { name: 'girl with laptop' }).nth(2).click();
  await page.getByRole('img', { name: 'Microsoft Surface Pro 7 PUV-' }).click();
  await page.getByRole('button', { name: 'Add To Bag' }).click();
  await expect(page.getByLabel('cart')).toBeVisible();
  await expect(page.getByLabel('cart')).toContainText('1');


  
});
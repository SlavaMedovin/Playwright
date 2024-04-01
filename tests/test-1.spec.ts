import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
});await page.locator('body').click();
await page.locator('body').click();
await page.goto('https://capital.com/');
await page.getByRole('link', { name: 'Log In' }).click();
await page.getByRole('textbox', { name: 'Email address' }).click();
await page.getByRole('textbox', { name: 'Email address' }).fill('qweeada@mail.com');
await page.getByRole('textbox', { name: 'Email address' }).press('Tab');
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill('1233qaasdaAsda');
await page.getByRole('button', { name: 'Continue' }).click();
await page.getByText('Email or password is invalid.').click();
await expect(page.locator('div').filter({ hasText: 'Email or password is invalid.' }).nth(3)).toBeVisible();
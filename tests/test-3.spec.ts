import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 
  await page.goto('https://yandex.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByPlaceholder('Nome de utilizador ou e-mail').click();
  await page.getByPlaceholder('Nome de utilizador ou e-mail').fill('123123131');
  await page.getByRole('button', { name: 'Iniciar sessão' }).click();
  await page.getByText('Nome de utilizador inválido').click();
  await expect(page.getByText('Nome de utilizador inválido')).toBeVisible();
});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://wooordhunt.ru/user/login');
  await page.getByLabel('Электронная почта (email) *').click();
  await page.getByLabel('Электронная почта (email) *').fill('asdasd@mail.com');
  await page.getByLabel('Электронная почта (email) *').press('Tab');
  await page.getByPlaceholder('Слово или словосочетание').fill('1');
  await page.getByLabel('Пароль *').click();
  await page.getByLabel('Пароль *').fill('asdasd1231');
  await page.getByRole('button', { name: 'Войти' }).click();
  await expect(page.getByText('Неверный email или пароль')).toBeVisible();
});
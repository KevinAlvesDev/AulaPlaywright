import { test, expect } from '@playwright/test';

test('Buscar "Pacto Soluções" no Yahoo e clicar no botão de consentimento', async ({ page }) => {
  await page.goto('https://br.yahoo.com/');
  await page.fill('input[name="p"]', 'Pacto Soluções');

  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
    page.keyboard.press('Enter'),
  ]);

  const linkEsperado = page.locator('a[href="https://sistemapacto.com.br/"]');
  await expect(linkEsperado).toBeVisible();
});
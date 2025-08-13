import { test, expect } from '@playwright/test';
test('Buscar "Pacto Soluções" no Yahoo e verificar link', async ({ page }) => {
  await page.goto('https://br.yahoo.com/');
  await page.fill('input[name="p"]', 'Pacto Soluções');
  await Promise.all([
  await page.keyboard.press('Enter'),
  await page.waitForLoadState('domcontentloaded'),
  ]);
  await expect(page.locator('a[href="https://sistemapacto.com.br/"]')).toBeVisible();
});
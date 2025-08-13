import { test, expect } from '@playwright/test';
test('Acessar Segurança e Privacidade no UOL', async ({ page }) => {
  await page.goto('https://www.uol.com.br/');
  await page.locator('a[href="https://sobreuol.noticias.uol.com.br/normas-de-seguranca-e-privacidade.html"]').click();
  await expect(page).toHaveURL(/normas-de-seguranca-e-privacidade/);
  await expect(page).toHaveTitle('Normas de Segurança e Privacidade - Sobre UOL');
  const validar = await page.getByText('Atualização:');
  await expect(validar).toBeVisible();
  await page.pause();
});
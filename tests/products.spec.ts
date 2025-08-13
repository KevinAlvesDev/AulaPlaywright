import test, { expect } from "@playwright/test";

test('Nome dos produtos com "Sauce labs"', async ({page}) => {
    test.fail();
    await   test.step('login', async () => {
            await page.goto('https://www.saucedemo.com/')
            await expect(await page.title()).toBe('Swag Labs');

            await page.locator('[data-test="username"]').fill('standard_user')
            await page.locator('[data-test="password"]').fill('secret_sauce')
            await page.locator('[data-test="login-button"]').click();
    })

    await   test.step('Titulo dos produtos', async () => {
       
        const listaDeTitulos = await page.locator('.inventory_item_name');
        const titleList = await listaDeTitulos.allTextContents();
        
        for(const item of titleList) {
            await expect(item.slice(0, 10)).toBe('Sauce Labs')

        }
    });
});
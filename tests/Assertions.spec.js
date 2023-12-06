import {test,expect} from '@playwright/test';

// test('Assertions', async({page})=>{

//     await page.goto('https://www.demoblaze.com/');
//     await expect(page).toHaveURL('https://www.demoblaze.com/');

//     await expect(page).toHaveTitle('STORE');

//     const logoElement = await page.locator('#nava')
//     await expect(logoElement).toBeVisible()

// })

test('Assertions_one', async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    const logoElement = await page.locator("img[alt='nopCommerce demo store']")
    await expect(logoElement).toBeVisible()

    const SearchBox = await page.locator('#small-searchterms')
    await expect(SearchBox).toBeEnabled()

    const GenderRadioButton = await page.locator('#gender-male')
    await GenderRadioButton.click()
    await expect(GenderRadioButton).toBeChecked()



})
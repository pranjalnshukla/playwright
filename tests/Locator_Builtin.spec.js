/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import {test,expect} from '@playwright/test'

test('BuiltinLocator',async({page})=>{

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const logoBranding = await page.getByAltText('company-branding')

    await expect(logoBranding).toBeVisible()

    // Locate element by placeholder

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    //get by role - button

    await page.getByRole('button', {type:'submit'}).click();

    //getbytext method 

    const usernamedropdown = await page.locator("//p[@class='oxd-userdropdown-name']").textContent()

    await expect(await page.getByText(usernamedropdown)).toBeVisible();




})
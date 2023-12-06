import {test,expect} from '@playwright/test'

test('Locator',async({page})=>{

    await page.goto('https://www.demoblaze.com/');

    // click on login button
    // await page.locator('id=login2').click(); 1st method

    await page.click('id=login2');

    // Click on Username and password to fill 

    await page.fill('id=loginusername','pavanol');
    await page.fill('id=loginpassword','test@123');
    await page.click("button[onclick='logIn()']");
   
    //Verify Logout Link

    const logoutlink = await page.locator('id=logout2');
    await expect(logoutlink).toBeVisible();


})
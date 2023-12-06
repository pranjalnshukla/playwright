import{test,expect} from '@playwright/test';

test('MultiLocator', async({page})=>{

    await page.goto('https://total-qa.com/checkbox-example/');
    await page.locator("(//input[@name='chk'])[1]").check();
    await expect(await page.locator("(//input[@name='chk'])[1]")).toBeChecked();

    const CheckboxVerify = [
        "(//input[@name='chk'])[1]",
        "(//input[@name='chk'])[2]",
        "(//input[@name='chk'])[3]"
    ]

    for(const locator of CheckboxVerify){

        await page.locator(locator).check();
    }

    for(const locator of CheckboxVerify){

        if(await page.locator(locator).isChecked()){
        await page.locator(locator).uncheck();
        }
    }

    await page.waitForTimeout(5000);



})
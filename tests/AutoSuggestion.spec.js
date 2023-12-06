import {test,expect} from '@playwright/test';

test('AutoSuggestoption',async({page})=>{

    await page.goto('https://www.redbus.in/');
    await page.locator('#src').fill('Delhi');
    // await page.waitForSelector("//i[contains@(class,'sc-iwsKbI')]/div/text[1]");
    await page.waitForSelector("(//ul[@class='sc-dnqmqq eFEVtU'])[1]");
    const fromcityoptions = await page.$$("(//ul[@class='sc-dnqmqq eFEVtU'])[1]")
    for(let option of fromcityoptions){
        const value = await option.textContent();
        // console.log(value);
        if(value.includes("Anand Vihar")){

            await option.click();
            break;
        }
    }


await page.waitForTimeout(5000);

})
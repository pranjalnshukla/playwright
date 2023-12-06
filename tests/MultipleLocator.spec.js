import {test,expect} from '@playwright/test'

// writing of ananonyms function to sart test

test('MultipleLocator', async({page})=>{

    // writing function to print all links given on the webpage

    await page.goto('https://www.demoblaze.com/');

    // const links = await page.$$('a');

    // for(const link of links){
    //      const linktext = await link.textContent()
    //      console.log(linktext);
    // }

    // Fetching all mobile names

    try {
        const mobilenames = await page.$$("#tbodyid h4 a");
    
        for (const mobilename of mobilenames) {
            const mobilelinktext = await (await mobilename.getProperty('textContent')).jsonValue();
            console.log(mobilelinktext);
        }
    } catch (error) {
        console.error("Error:", error);
    }

})


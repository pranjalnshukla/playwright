import{test,expect} from '@playwright/test'
import { arrayBuffer } from 'stream/consumers';

test('CountryDropdown',async({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/");

   //Dropdown func to select dropdown

   // await page.locator('#country').selectOption({label:'India'});
   // await page.locator('#country').selectOption('India');
   // await page.locator('#country').selectOption({value:'uk'});
   // await page.locator('#country').selectOption({index:1});
   // await page.selectOption('#country','India')

   //Assertionns which could be applied 

   //To check the no of options present in dropdown

   //  const options = await page.locator('#country option')
   //  await  expect(options).toHaveCount(10);

   //  Approach 2 By creating array

   // const options = await page.$$('#country option');
   // //  console.log("Number of Options:",options.length);
   //  await expect(options.length).toBe(10);


   // to check the presence of values
   //textContent() method fetch all the content in given xpath or sny selector

   // const content = await page.locator('#country').textContent();
   // await expect(content.includes('India')).toBeTruthy();

   // Fourth Approach by looping STATEMENTS By loooping statements

   // const options = await page.$$('#country option')

   // for(const option of options){

   //    console.log(await option.textContent());
   // }

   // const options = await page.$$('#country option')
   // let status = false;

   // for(const option of options){

   //    let value = await option.textContent();
   //    if(value.includes('India')){
   //       status = true;
   //       break;

   //    }
   // }
   // expect(status).toBeTruthy();

   const options = await page.$$('#country option')
      for(const option of options){

      let value = await option.textContent();
      if(value.includes('India')){
         
         await page.selectOption('#country',value)
         break;

      }
   }


    


   await page.waitForTimeout(5000);



})
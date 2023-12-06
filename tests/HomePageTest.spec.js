const {test,expect}= require('@playwright/test');
test('Home Page',async({page}) => { 

   await page.goto('https://www.demoblaze.com/');

   const pageTitle = page.title();
   console.log('Page title is :',pageTitle);

   await expect(page).toHaveTitle('STORE');
   const pageUrl = page.url();
   console.log('PageUrl is :',pageUrl);
   await expect(page).toHaveURL('https://www.demoblaze.com/');
   await page.close();

})
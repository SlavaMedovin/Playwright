const    {test,expect} = require("@playwright/test");

test('Launching the browser', async({page}) => {
    await page.goto('https://cloudtesting.contosotraders.com/'); 
    await expect(page).toHaveTitle('Contoso Traders')
    
})
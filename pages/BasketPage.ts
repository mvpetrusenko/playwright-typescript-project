import { Page } from '@playwright/test'; 
import { basketPage } from '../fixtures/selectors'; 



  export async function addProductToBasket(page: Page) {
    
    await page.waitForSelector(basketPage.buttonBasket, { state: 'visible' });
    await page.click(basketPage.buttonBasket); 
    await page.waitForSelector(basketPage.addedItemToBasket, { state: 'visible' });
 
} 


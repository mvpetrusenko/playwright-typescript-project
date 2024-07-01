import { Page } from '@playwright/test'; 
import { baseSearch, clickDrugItem } from '../pages/HomePage'; 
import { searchResults } from '../pages/SearchResultsPage'; 
import { drugs } from '../fixtures/dictionary'; 
import { pricesPage, basketPage } from '../fixtures/selectors'; 


export async function goToPricesPage(page: Page) {
    await baseSearch(page, drugs.ascorbine); 
    await searchResults(page);
    await clickDrugItem(page); 
    await page.waitForSelector(pricesPage.tabPrices, { state: 'visible' });
    await page.click(pricesPage.tabPrices); 
    await page.waitForSelector(pricesPage.offersBlock, { state: 'visible' });

} 


export async function clickOrderButton(page: Page) {
    
      await page.waitForSelector(basketPage.buttonPrice, { state: 'visible' });
      await page.click(basketPage.buttonPrice); 
      await page.waitForSelector(basketPage.buttonOrder, { state: 'visible' });
      await page.click(basketPage.buttonOrder);  
   
  }
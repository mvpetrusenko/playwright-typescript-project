import { Page, expect } from '@playwright/test'; 
import { baseSearch, clickDrugItem } from '../pages/HomePage'; 
import { searchResults } from '../pages/SearchResultsPage'; 
import { drugs, sorting } from '../fixtures/dictionary'; 
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

  export async function sortFromCheap(page: Page) { 
//     await page.waitForSelector(pricesPage.buttonSorting, { state: 'attached' });

//     await page.evaluate(selector => {
//     const element = document.querySelector(selector) as HTMLElement;
//     if (element) {
//         element.style.display = 'block';
//         element.style.visibility = 'visible';
//         element.style.opacity = '1';
//     }
// }, pricesPage.buttonSorting);

    //await page.waitForSelector(pricesPage.buttonSorting, { state: 'visible' });
    await page.click(pricesPage.buttonSorting); 
    await page.waitForSelector(pricesPage.sortingFromCheap, { state: 'visible' });
    await page.click(pricesPage.sortingFromCheap);  
    expect(await page.textContent(pricesPage.buttonSorting)).toContain(sorting.fromCheap); 
    let minPriceFrom1 = parseInt(await page.textContent(pricesPage.drugPrice), 10);
    let minPriceFrom2 = parseInt(await page.textContent(pricesPage.drugPrice2), 10);
    expect(minPriceFrom1).toBeGreaterThan(minPriceFrom2); 
  
  }
    
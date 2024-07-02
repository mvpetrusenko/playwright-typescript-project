import { Page, expect } from '@playwright/test'; 
import { categories, mainPage } from '../fixtures/selectors'; 
import { components } from '../fixtures/dictionary';



export async function changeGeoLocationCategoriesPage(page: Page, city: string) { 

    await page.waitForSelector(mainPage.buttonAddress, { state: 'visible' });
    await page.click(mainPage.buttonAddress); 
    await page.waitForSelector(mainPage.inputSearchCity, { state: 'visible' }); 
    await page.fill(mainPage.inputSearchCity, city); 
    await page.click(mainPage.buttonSearchCity); 
    await page.waitForSelector(mainPage.firstCitySuggestion, { state: 'visible' });
    await page.click(mainPage.firstCitySuggestion); 
    await page.waitForSelector(mainPage.firstCitySuggestion, { state: 'hidden' }); 
    
  } 


  export async function compareDrugInfo(page: Page) {
    let quantityCity1 = await page.textContent(categories.quantityInDrugStores); 
    let minPriceFrom1 = await page.textContent(categories.minPriceFrom);
   await changeGeoLocationCategoriesPage(page, components.city2); 
   let quantityCity2 = await page.textContent(categories.quantityInDrugStores); 
   let minPriceFrom2 = await page.textContent(categories.minPriceFrom);
   expect(quantityCity1).not.toEqual(quantityCity2); 
   expect(minPriceFrom1).not.toEqual(minPriceFrom2); 

  }
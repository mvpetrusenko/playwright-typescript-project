import { Page, expect } from '@playwright/test'; 
import { atcPage, categories, mainPage } from '../fixtures/selectors'; 
import { components } from '../fixtures/dictionary';


export async function goToAtcPage(page: Page) {
    await page.waitForSelector(mainPage.buttonCategories, { state: 'visible' });
    await page.click(mainPage.buttonCategories); 
    await page.click(atcPage.atcnClassification); 
    await page.click(atcPage.atcLetter); 
    expect(await page.textContent(categories.breadcrumbCategory)).toContain(components.atc); 
} 


export async function goToThirdSubCategoryAtcPage(page: Page) { 

    await page.click(categories.arrowToSecondSubCategory); 
    await page.click(categories.arrowToThirdCategory); 
    await page.click(atcPage.thirdSubcategory);
    expect(await page.textContent(categories.nodeDetail)).toContain(components.thirdSubcategoryNodeAtc); 
    
} 

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


  export async function compareQuantityInDrugStores(page: Page) {
    let quantityCity1 = await page.textContent(categories.quantityInDrugStores); 
    let minPriceFrom1 = await page.textContent(categories.minPriceFrom);
   await changeGeoLocationCategoriesPage(page, components.city2); 
   let quantityCity2 = await page.textContent(categories.quantityInDrugStores); 
   let minPriceFrom2 = await page.textContent(categories.minPriceFrom);
   expect(quantityCity1).not.toEqual(quantityCity2); 
   expect(minPriceFrom1).not.toEqual(minPriceFrom2); 
   


  }
import { Page, expect } from '@playwright/test'; 
import { atcPage, categories, mainPage } from '../fixtures/selectors'; 
import { components } from '../fixtures/dictionary';


export async function goToAtcPage(page: Page) {
    await page.waitForSelector(mainPage.buttonCategories, { state: 'visible' });
    await page.click(mainPage.buttonCategories); 
    await page.click(atcPage.atcClassification); 
    await page.click(categories.subCategory); 
    expect(await page.textContent(categories.breadcrumbCategory)).toContain(components.atc); 
} 


export async function goToThirdSubCategoryAtcPage(page: Page) { 

    await page.click(atcPage.arrowToSecondSubCategoryAtc); 
    await page.click(atcPage.arrowToThirdCategoryAtc); 
    await page.click(atcPage.thirdSubcategory);
    expect(await page.textContent(categories.nodeDetail)).toContain(components.thirdSubcategoryNodeAtc); 
    
} 

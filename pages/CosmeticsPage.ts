import { Page, expect } from '@playwright/test'; 
import { cosmeticsPage, categories, mainPage } from '../fixtures/selectors'; 
import { components } from '../fixtures/dictionary';


export async function goToCosmeticsPage(page: Page) {
    await page.waitForSelector(mainPage.buttonCategories, { state: 'visible' });
    await page.click(mainPage.buttonCategories); 
    await page.click(cosmeticsPage.cosmeticsClassification); 
    await page.click(categories.subCategory); 
    expect(await page.textContent(categories.breadcrumbCategory)).toContain(components.cosmetics); 
} 


export async function goToThirdSubCategoryCosmeticsPage(page: Page) { 

    await page.click(cosmeticsPage.arrowToSecondSubCategoryCosmetics); 
    await page.click(cosmeticsPage.arrowToThirdCategoryCosmetics); 
    await page.click(cosmeticsPage.thirdSubcategory);
    expect(await page.textContent(categories.pageTitleThirdSubcategory)).toContain(components.thirdSubcategoryNodeCosmetics); 
    
} 

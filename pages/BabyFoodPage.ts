import { Page, expect } from '@playwright/test'; 
import { atcPage, babyFoodPage, categories, mainPage } from '../fixtures/selectors'; 
import { components } from '../fixtures/dictionary';


export async function goToBabyFoodPage(page: Page) {
    await page.waitForSelector(mainPage.buttonCategories, { state: 'visible' });
    await page.click(mainPage.buttonCategories); 
    await page.click(babyFoodPage.babyFoodClassification); 
    await page.click(categories.subCategory); 
    expect(await page.textContent(categories.breadcrumbCategory)).toContain(components.babyFood); 
} 


export async function goToThirdSubCategoryBabyFoodPage(page: Page) { 

    await page.click(babyFoodPage.arrowToSecondSubCategoryBabyFood); 
    await page.click(babyFoodPage.arrowToThirdCategoryBabyFood); 
    await page.click(babyFoodPage.thirdSubcategory);
    expect(await page.textContent(categories.pageTitleThirdSubcategory)).toContain(components.thirdSubcategoryNodeBabyFood); 
    
} 

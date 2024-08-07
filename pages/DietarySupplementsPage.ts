import { Page, expect } from '@playwright/test'; 
import { dietarySupplementsPage, categories, mainPage } from '../fixtures/selectors'; 
import { components } from '../fixtures/dictionary';


export async function goToDietarySupplementsPage(page: Page) {
    await page.waitForSelector(mainPage.buttonCategories, { state: 'visible' });
    await page.click(mainPage.buttonCategories); 
    await page.click(dietarySupplementsPage.dietarySupplementsClassification); 
    await page.click(categories.subCategory); 
    expect(await page.textContent(categories.breadcrumbCategory)).toContain(components.dietarySupplements); 
} 


export async function goToThirdSubCategoryDietarySupplementsPage(page: Page) { 

    await page.click(dietarySupplementsPage.arrowToSecondSubCategoryDietarySupplements); 
    await page.click(dietarySupplementsPage.arrowToThirdCategoryDietarySupplements); 
    await page.click(dietarySupplementsPage.thirdSubcategory);
    expect(await page.textContent(categories.pageTitleThirdSubcategory)).toContain(components.thirdSubcategoryNodeDietarySupplements); 
    
} 
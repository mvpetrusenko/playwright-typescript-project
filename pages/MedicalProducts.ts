import { Page, expect } from '@playwright/test'; 
import { medicalProductsPage, categories, mainPage } from '../fixtures/selectors'; 
import { components } from '../fixtures/dictionary';


export async function goToMedicalProductsPage(page: Page) {
    await page.waitForSelector(mainPage.buttonCategories, { state: 'visible' });
    await page.click(mainPage.buttonCategories); 
    await page.click(medicalProductsPage.medicalProductsClassification); 
    await page.click(categories.subCategory); 
    expect(await page.textContent(categories.breadcrumbCategory)).toContain(components.medicalProducts); 
} 


export async function goToThirdSubCategoryMedicalProductsPage(page: Page) { 

    await page.click(medicalProductsPage.arrowToSecondSubCategoryMedicalProducts); 
    await page.click(medicalProductsPage.arrowToThirdCategoryMedicalProducts); 
    await page.click(medicalProductsPage.thirdSubcategory);
    expect(await page.textContent(categories.pageTitleThirdSubcategory)).toContain(components.thirdSubcategoryNodeMedicalProducts); 
    
} 

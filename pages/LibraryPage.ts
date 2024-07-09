import { Page } from '@playwright/test'; 
import { expect } from '@playwright/test';
import { mainPage, libraryPage, clinicalGuidelinesPage, medicalLiteraturePage, nosologicalReferenceBookPage } from '../fixtures/selectors'; 


export async function goToLibraryPage(page: Page) {
    
    await page.waitForSelector(mainPage.buttonCategories, { state: 'visible' });
    await page.click(mainPage.buttonCategories); 
    await page.waitForSelector(libraryPage.libraryTab, { state: 'visible' });
    await page.click(libraryPage.libraryTab); 
   
  } 


  export async function goToClinicalGuidelinesPage(page: Page) {
    
    await page.waitForSelector(clinicalGuidelinesPage.tabClinicalGuidelines, { state: 'visible' });
    await page.click(clinicalGuidelinesPage.tabClinicalGuidelines); 
  
  }  

  export async function goToClinicalGuidelinesArticle(page: Page) {
    
    await page.click(clinicalGuidelinesPage.clinicalGuidelinesItem); 
    await page.click(clinicalGuidelinesPage.subSectionItem); 
    
  }  

  export async function goToMedicalLiteraturePage(page: Page) {
    
    await page.waitForSelector(medicalLiteraturePage.tabMedicalLiterature, { state: 'visible' });
    await page.click(medicalLiteraturePage.tabMedicalLiterature); 
    expect(page.locator(medicalLiteraturePage.pageTitle)).toBeVisible(); 
    
  }  

  export async function goToReferenceBooksPage(page: Page) { 

    await page.waitForSelector(nosologicalReferenceBookPage.tabReferenceBooks, { state: 'visible' }); 
    await page.click(nosologicalReferenceBookPage.tabReferenceBooks); 
    await page.waitForSelector(nosologicalReferenceBookPage.tabDoctorsNosologicalReferenceBook, { state: 'visible' }); 
    await page.click(nosologicalReferenceBookPage.tabDoctorsNosologicalReferenceBook); 
    
  }  
import { test, expect } from '@playwright/test'; 
import { navigatorTo } from '../../../pages/HomePage'; 
import { libraryPage, mainPage, medicalLiteraturePage } from '../../../fixtures/selectors'; 
import { goToLibraryPage, goToMedicalLiteraturePage } from '../../../pages/LibraryPage'; 
import { mainConfig } from '../../../fixtures/constants';



test.describe('Medical Literature Tests', () => {
    test.beforeEach(async ({ page }) => {
      await navigatorTo(page);
    });
  
    test('NC-TC-939: Go to Medical Literature Page', async ({ page }) => { 
      await goToLibraryPage(page); 
      await goToMedicalLiteraturePage(page); 
      await page.click(medicalLiteraturePage.firstBook); 
      await expect(page.locator(medicalLiteraturePage.aboutBookInfo)).toBeVisible();

    }); 

    test('NC-TC-942: Go to Previous Page', async ({ page }) => { 
        await goToLibraryPage(page); 
        await goToMedicalLiteraturePage(page); 
        await expect(page.locator(medicalLiteraturePage.pageTitle)).toBeVisible();

        await page.goBack(); 
        await expect(page.locator(mainPage.jumbotron)).toBeVisible();
        expect(page.url()).toContain(mainConfig.baseUrl); 
  
      }); 

      test('NC-TC-948: Go to Previous Breadcrumb Tab', async ({ page }) => { 
        await goToLibraryPage(page); 
        await goToMedicalLiteraturePage(page); 
        await page.click(medicalLiteraturePage.previousBreadCrumbTab); 
        await expect(page.locator(libraryPage.libraryHeader)).toBeVisible(); 
  
      });
  
    test.afterEach(async ({ page }) => {
      await page.close();
  });
});
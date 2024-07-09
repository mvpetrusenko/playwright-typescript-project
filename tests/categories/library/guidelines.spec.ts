import { test, expect } from '@playwright/test'; 
import { navigatorTo } from '../../../pages/HomePage'; 
import { clinicalGuidelinesPage } from '../../../fixtures/selectors'; 
import { goToClinicalGuidelinesPage, goToLibraryPage, goToClinicalGuidelinesArticle } from '../../../pages/LibraryPage'; 
import { components } from '../../../fixtures/dictionary';



test.describe('Guidelines Tests', () => {
    test.beforeEach(async ({ page }) => {
      await navigatorTo(page);
    });
  
    test('NC-TC-938: Go to Clinical Guidelines Page', async ({ page }) => {
 
      await goToLibraryPage(page); 
      await goToClinicalGuidelinesPage(page); 
      await goToClinicalGuidelinesArticle(page); 
      await expect(page.locator(clinicalGuidelinesPage.article)).toBeVisible(); 
      //expect(await page.textContent(clinicalGuidelinesPage.articleTitle)).toContain(components.titleCommonPoints); 
      
    });
  
    test.afterEach(async ({ page }) => {
      await page.close();
  });
});
import { test, expect } from '@playwright/test'; 
import { navigatorTo } from '../../../pages/HomePage'; 
import { clinicalGuidelinesPage } from '../../../fixtures/selectors'; 
import { goToClinicalGuidelinesPage, goToLibraryPage, goToClinicalGuidelinesArticle } from '../../../pages/LibraryPage'; 



test.describe('Guidelines Tests', () => {
    test.beforeEach(async ({ page }) => {
      await navigatorTo(page);
    });
  
    test('NC-TC-938: Go to Clinical Guidelines Page', async ({ page }) => {
 
      await goToLibraryPage(page); 
      await goToClinicalGuidelinesPage(page); 
      await goToClinicalGuidelinesArticle(page);
      await expect(page.locator(clinicalGuidelinesPage.article)).toBeVisible();
      
    });
  
    test.afterEach(async ({ page }) => {
      await page.close();
  });
});
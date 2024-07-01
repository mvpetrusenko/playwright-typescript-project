import { test, expect } from '@playwright/test'; 
import { navigatorTo } from '../../../pages/HomePage'; 
import { medicalLiteraturePage, nosologicalReferenceBookPage } from '../../../fixtures/selectors'; 
import { goToLibraryPage, goToReferenceBooksPage } from '../../../pages/LibraryPage'; 



test.describe('Reference Books Tests', () => {
    test.beforeEach(async ({ page }) => {
      await navigatorTo(page);
    });
  
    test('NC-TC-941: Go to Doctor`s Nosological Reference Book Page', async ({ page }) => { 
      await goToLibraryPage(page); 
      await goToReferenceBooksPage(page); 
      await page.click(nosologicalReferenceBookPage.firstArticleItem); 
      await expect(page.locator(nosologicalReferenceBookPage.referenceBookChapter)).toBeVisible();
      
    }); 

  
    test.afterEach(async ({ page }) => {
      await page.close();
  });
});
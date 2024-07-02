import { test } from '@playwright/test';
import { navigatorTo } from '../../pages/HomePage'; 
import { changeGeoLocationCategoriesPage, compareDrugInfo } from '../../pages/CategoriesPage'; 
import { components } from '../../fixtures/dictionary'; 
import { goToMedicalProductsPage, goToThirdSubCategoryMedicalProductsPage } from '../../pages/MedicalProducts';
 

test.describe('Medical Products Category Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-619 Change GeoLocation on Third Subcategory Drug Page', async ({ page }) => { 

        await goToMedicalProductsPage(page); 
        await goToThirdSubCategoryMedicalProductsPage(page);
        await changeGeoLocationCategoriesPage(page, components.city1); 
        await compareDrugInfo(page);

    });
  
    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });
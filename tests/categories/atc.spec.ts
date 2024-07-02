import { test } from '@playwright/test';
import { navigatorTo } from '../../pages/HomePage'; 
import { goToAtcPage, goToThirdSubCategoryAtcPage } from '../../pages/ATCPage'; 
import { changeGeoLocationCategoriesPage, compareDrugInfo } from '../../pages/CategoriesPage'; 
import { components } from '../../fixtures/dictionary'; 


test.describe('ATC Category Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-446 Change GeoLocation on Third Subcategory Drug Page', async ({ page }) => {
        
        await goToAtcPage(page); 
        await goToThirdSubCategoryAtcPage(page);
        await changeGeoLocationCategoriesPage(page, components.city1); 
        await compareDrugInfo(page);
     

    });
  
    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });

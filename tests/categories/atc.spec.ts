import { test, expect } from '@playwright/test';
import { navigatorTo } from '../../pages/HomePage'; 
import { changeGeoLocationCategoriesPage, compareQuantityInDrugStores, goToAtcPage, goToThirdSubCategoryAtcPage } from '../../pages/ATCPage'; 
import { components } from '../../fixtures/dictionary'; 
import { atcPage, categories } from '../../fixtures/selectors'; 

 

test.describe('ATC Category Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-446 Change GeoLocation on Third Subcategory Drug Page', async ({ page }) => {
        
        await goToAtcPage(page); 
        await goToThirdSubCategoryAtcPage(page);
        await changeGeoLocationCategoriesPage(page, components.city1); 
        await compareQuantityInDrugStores(page);
     

    });
  
    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });

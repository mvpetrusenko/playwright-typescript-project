import { test } from '@playwright/test';
import { navigatorTo } from '../../pages/HomePage'; 
import { changeGeoLocationCategoriesPage, compareDrugInfo } from '../../pages/CategoriesPage'; 
import { components } from '../../fixtures/dictionary'; 
import { goToBabyFoodPage, goToThirdSubCategoryBabyFoodPage } from '../../pages/BabyFoodPage';
 

test.describe('Baby Food Category Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-499 Change GeoLocation on Third Subcategory Drug Page', async ({ page }) => { 

        await goToBabyFoodPage(page); 
        await goToThirdSubCategoryBabyFoodPage(page);
        await changeGeoLocationCategoriesPage(page, components.city1); 
        await compareDrugInfo(page);

    });
  
    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });
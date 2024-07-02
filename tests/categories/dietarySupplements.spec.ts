import { test } from '@playwright/test';
import { navigatorTo } from '../../pages/HomePage'; 
import { changeGeoLocationCategoriesPage, compareDrugInfo } from '../../pages/CategoriesPage'; 
import { components } from '../../fixtures/dictionary'; 
import { goToDietarySupplementsPage, goToThirdSubCategoryDietarySupplementsPage } from '../../pages/DietarySupplementsPage';
 

test.describe('Dietary Supplements Category Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-529 Change GeoLocation on Third Subcategory Drug Page', async ({ page }) => { 

        await goToDietarySupplementsPage(page); 
        await goToThirdSubCategoryDietarySupplementsPage(page);
        await changeGeoLocationCategoriesPage(page, components.city1); 
        await compareDrugInfo(page);
     

    });
  
    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });
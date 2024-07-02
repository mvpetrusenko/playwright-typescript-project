import { test } from '@playwright/test';
import { navigatorTo } from '../../pages/HomePage'; 
import { changeGeoLocationCategoriesPage, compareDrugInfo } from '../../pages/CategoriesPage'; 
import { components } from '../../fixtures/dictionary'; 
import { goToCosmeticsPage, goToThirdSubCategoryCosmeticsPage } from '../../pages/CosmeticsPage';
 

test.describe('Cosmetics Category Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-589 Change GeoLocation on Third Subcategory Drug Page', async ({ page }) => { 

        await goToCosmeticsPage(page); 
        await goToThirdSubCategoryCosmeticsPage(page);
        await changeGeoLocationCategoriesPage(page, components.city1); 
        await compareDrugInfo(page);

    });
  
    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });
import { test, expect } from '@playwright/test'; 
import { navigatorTo, clickTopDrugPhoto, addDrugToFavorites, deleteDrugFromFavorites } from '../pages/HomePage'; 
import { mainPage, aboutDrugPage } from '../fixtures/selectors';
import { components, tabs } from '../fixtures/dictionary'; 
import { addDrugToFavorite } from '../pages/AboutDrugPage'; 



test.describe('Main Page Tests', () => {
    test.beforeEach(async ({ page }) => {
      await navigatorTo(page);
    });
  
    test('NC-TC-218: Check Localization on the First Website Visit', async ({ page }) => { 

        expect(await page.textContent(mainPage.buttonCategories)).toContain(components.categories);

    }); 

    test('NC-TC-225: Check Drug Photo is Clicable in Section "Top Drugs"', async ({ page }) => { 

        await clickTopDrugPhoto(page);
        const getTextContent = aboutDrugPage.tabAboutDrug; 
        expect(await page.textContent(getTextContent)).toContain(tabs.aboutDrugTabUa); 
 

    }); 

    test('NC-TC-226: Add / Delete Drug to Favorite in Section "Top Drugs"', async ({ page }) => { 

      await clickTopDrugPhoto(page);
      const getTextContent = aboutDrugPage.tabAboutDrug; 
      await addDrugToFavorite(page); 
      await deleteDrugFromFavorites(page);

  });
  
    test.afterEach(async ({ page }) => {
      await page.close();
  });
});
import { test, expect } from '@playwright/test';
import { baseSearch, navigatorTo } from '../pages/HomePage'; 
import { drugs, tabs } from '../fixtures/dictionary'; 
import { searchResults } from '../pages/SearchResultsPage'; 
import { mainPage, aboutDrugPage } from '../fixtures/selectors'; 

 

test.describe('Search Results Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-646: Redirection on About Drug Page After Clicking Drug Name', async ({ page }) => { 
        await baseSearch(page, drugs.ascorbine); 
        await searchResults(page);
        await page.click(mainPage.firstResult); 
        expect(await page.textContent(aboutDrugPage.tabAboutDrug)).toContain(tabs.aboutDrugTabUa); 
     

    }); 

    test('NC-TC-645: Redirection on About Drug Page After Clicking Drug Photo', async ({ page }) => { 
      await baseSearch(page, drugs.ascorbine); 
      await searchResults(page);
      await page.click(mainPage.firstResultPhoto); 
      expect(await page.textContent(aboutDrugPage.tabAboutDrug)).toContain(tabs.aboutDrugTabUa); 
   

  });
  
    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });
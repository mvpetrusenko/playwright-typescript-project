import { test, expect } from '@playwright/test';
import { baseSearch, navigatorTo, clickDrugItem, addDrugToFavorites, deleteDrugFromFavorites } from '../pages/HomePage'; 
import { drugs, tabs } from '../fixtures/dictionary';
import { searchResults } from '../pages/SearchResultsPage'; 
import { analoguePage, instructionPage, mainPage } from '../fixtures/selectors'; 
import { aboutDrugPage } from '../fixtures/selectors'; 
import { mainRoutes } from '../fixtures/routes'; 
import { goToAnalogueTab, navigateToLastBreadCrumbsTabs, navigateToPreLastBreadCrumbsTabs, navigateToHomeBreadCrumbsTabs, addDrugToFavoriteAnaloguesPage, activateFilterCheckboxes, checkFiltersResultBlock} from '../pages/AnaloguesPage';


test.describe('Analogues Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-84: Verify Breadcrumbs are Clickable', async ({ page }) => { 

        await goToAnalogueTab(page); 
        await navigateToLastBreadCrumbsTabs(page); 
        await expect(page.locator(analoguePage.lastBreadcrumb)).toBeVisible();
        await navigateToPreLastBreadCrumbsTabs(page); 
        expect(await page.textContent(instructionPage.tabInstructionBreadCrumb)).toContain(tabs.insctructionTabUa); 

        await goToAnalogueTab(page);
        await navigateToHomeBreadCrumbsTabs(page); 
        await expect(page.locator(mainPage.jumbotron)).toBeVisible();

    }); 

    test('NC-TC-85: Verify Drug Name is Clickable', async ({ page }) => { 

        await goToAnalogueTab(page); 
        await page.click(mainPage.firstResult); 
        expect(await page.textContent(aboutDrugPage.tabAboutDrug)).toContain(tabs.aboutDrugTabUa); 
        

    }); 

    test('NC-TC-86: Verify Drug Photo is Clickable', async ({ page }) => { 

        await goToAnalogueTab(page); 
        await page.click(mainPage.firstResultPhoto); 
        expect(await page.textContent(aboutDrugPage.tabAboutDrug)).toContain(tabs.aboutDrugTabUa); 
        

    }); 

    test('NC-TC-90: Check Grid Display Mode', async ({ page }) => { 

        await goToAnalogueTab(page); 
        await page.click(analoguePage.buttonGrid); 
        await expect(page.locator(analoguePage.gridDisplay)).toBeVisible();
         

    }); 

    test('NC-TC-89: Check Tile Display Mode', async ({ page }) => { 

        await goToAnalogueTab(page); 
        await page.click(analoguePage.buttonGrid); 
        await expect(page.locator(analoguePage.gridDisplay)).toBeVisible();
        await page.click(analoguePage.buttonTile); 
        await expect(page.locator(analoguePage.tileDisplay)).toBeVisible();
         

    }); 

    test('NC-TC-91: Add Drug to Favorite', async ({ page }) => { 
      
        await goToAnalogueTab(page); 
        await addDrugToFavoriteAnaloguesPage(page); 
  
        await addDrugToFavorites(page);
    }); 
  
    test('NC-TC-92: Delete Drug from Favorite', async ({ page }) => { 
      
        await goToAnalogueTab(page); 
        await addDrugToFavoriteAnaloguesPage(page); 
  
        await addDrugToFavorites(page); 
        await deleteDrugFromFavorites(page);
  
  }); 
  
  test('NC-TC-111: Activated checkboxes: Release Form, Dosing, Quantity, Manufacturer', async ({ page }) => { 
  
    await goToAnalogueTab(page); 
    await activateFilterCheckboxes(page); 
    await checkFiltersResultBlock(page);
    

}); 

    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });
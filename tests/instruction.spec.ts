import { test, expect } from '@playwright/test';
import { addDrugToFavorites, deleteDrugFromFavorites, navigatorTo } from '../pages/HomePage'; 
import { mainRoutes } from '../fixtures/routes'; 
import { mainConfig } from '../fixtures/constants'; 
import { tabs } from '../fixtures/dictionary';
import { instructionPage, mainPage, aboutDrugPage, analoguePage } from '../fixtures/selectors';
import { goToAnaloguesFromInstruction, goToInstructionTab } from '../pages/InstructionPage'; 
import { navigateToLastBreadCrumbsTabs, navigateToPreLastBreadCrumbsTabs, navigateToHomeBreadCrumbsTabs, activateFilterCheckboxes, checkFiltersResultBlock} from '../pages/AnaloguesPage';



test.describe('Instruction Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-969: Go to Archived Instruction Page', async ({ page }) => { 
        await page.goto(mainConfig.baseUrl); 
        await page.goto(mainConfig.baseUrl + mainRoutes.archivedInstruction); 
        expect(page.url()).toContain(mainConfig.baseUrl + mainRoutes.archivedInstruction); 
        await expect(page.locator(instructionPage.buttonNotAvailable)).toBeVisible(); 
        await expect(page.locator(instructionPage.buttonFindAnalogues)).toBeVisible(); 
        await expect(page.locator(instructionPage.sectionAnalogues)).toBeVisible(); 

    }); 

    test('NC-TC-982: Navigation to Insctruction Sections', async ({ page }) => { 
      await goToInstructionTab(page);
      await page.click(instructionPage.tabDrugApplication); 
      await page.waitForTimeout(1000);
      await expect(page.locator(instructionPage.sectionDrugApplication)).toBeVisible(); 
      await page.click(instructionPage.tabDrugSideEffects); 
      await page.waitForTimeout(1000);
      await expect(page.locator(instructionPage.sectionDrugSideEffects)).toBeVisible(); 

  }); 

  test('NC-TC-987: Activated checkboxes: Release Form, Dosing, Quantity, Manufacturer', async ({ page }) => { 
    await goToAnaloguesFromInstruction(page); 
    await activateFilterCheckboxes(page); 
    await checkFiltersResultBlock(page);
    
}); 

test('NC-TC-1006: Add Drug to Favorite', async ({ page }) => { 
      
  await goToAnaloguesFromInstruction(page); 
  await page.click(analoguePage.buttonFavorite); 
  await page.waitForSelector(analoguePage.selectedButtonFavorite, { state: 'visible' }); 

  await page.waitForTimeout(1000); 
  await addDrugToFavorites(page);
}); 

test('NC-TC-1003: Delete Drug from Favorite', async ({ page }) => { 

  await goToAnaloguesFromInstruction(page); 
  await page.click(analoguePage.buttonFavorite); 
  await page.waitForSelector(analoguePage.selectedButtonFavorite, { state: 'visible' }); 

  await addDrugToFavorites(page); 
  await deleteDrugFromFavorites(page);

}); 

test('NC-TC-1007: Verify Drug Name is Clickable', async ({ page }) => { 

  await goToAnaloguesFromInstruction(page);  
  await page.click(mainPage.firstResult); 
  expect(await page.textContent(aboutDrugPage.tabAboutDrug)).toContain(tabs.aboutDrugTabUa); 
  

}); 

test('NC-TC-1008: Verify Drug Photo is Clickable', async ({ page }) => { 

  await goToAnaloguesFromInstruction(page); 
  await page.click(instructionPage.drugPhoto); 
  expect(await page.textContent(aboutDrugPage.tabAboutDrug)).toContain(tabs.aboutDrugTabUa); 
  

}); 

test('NC-TC-1013: Check Grid Display Mode', async ({ page }) => { 

  await goToAnaloguesFromInstruction(page);  
  await page.click(analoguePage.buttonGrid); 
  await expect(page.locator(analoguePage.gridDisplay)).toBeVisible();
   

}); 

test('NC-TC-1012: Check Tile Display Mode', async ({ page }) => { 

  await goToAnaloguesFromInstruction(page); 
  await page.click(analoguePage.buttonGrid); 
  await expect(page.locator(analoguePage.gridDisplay)).toBeVisible();
  await page.click(analoguePage.buttonTile); 
  await expect(page.locator(analoguePage.tileDisplay)).toBeVisible();
   

}); 

test('NC-TC-1014: Verify Breadcrumbs are Clickable', async ({ page }) => { 

  await goToAnaloguesFromInstruction(page);  
  await navigateToLastBreadCrumbsTabs(page); 
  await expect(page.locator(analoguePage.lastBreadcrumb)).toBeVisible();
  await navigateToPreLastBreadCrumbsTabs(page); 
  expect(await page.textContent(instructionPage.tabInstructionBreadCrumb)).toContain(tabs.insctructionTabUa); 

  await goToAnaloguesFromInstruction(page);  
  await navigateToHomeBreadCrumbsTabs(page); 
  await expect(page.locator(mainPage.jumbotron)).toBeVisible();

}); 
  
    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });
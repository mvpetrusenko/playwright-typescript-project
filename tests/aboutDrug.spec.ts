import { test, expect } from '@playwright/test'; 
import { baseSearch, navigatorTo, clickDrugItem, changeLocalization, deleteDrugFromFavorites } from '../pages/HomePage'; 
import { components, drugs, tabs } from '../fixtures/dictionary';
import { mainRoutes } from '../fixtures/routes'; 
import { aboutDrugPage } from '../fixtures/selectors'; 
import { addDrugToFavorite, checkReleaseFormBlock, compareDrugMinPrice, compareDrugPriceQuantityInfo, navigateInstructionBlock } from '../pages/AboutDrugPage'; 
import { searchResults } from '../pages/SearchResultsPage';
import { changeGeoLocationCategoriesPage } from '../pages/CategoriesPage';


test.describe('About Drug Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });



    test('NC-TC-64: Verify Localization on About Drug Page Changed to Ru', async ({ page }) => {

      await baseSearch(page, drugs.ascorbine); 
      await searchResults(page);
      await clickDrugItem(page);
    

      const getTextContent = aboutDrugPage.tabAboutDrug; 
      expect(await page.textContent(getTextContent)).toContain(tabs.aboutDrugTabUa); 

      await changeLocalization(page, 'ru');
      await expect(page.locator(aboutDrugPage.tabAboutDrug)).toBeVisible();
      expect(await page.textContent(getTextContent)).toContain(tabs.aboutDrugTabRu);

    });

    
    test('NC-TC-76: Add Drug to Favorite', async ({ page }) => { 

      await baseSearch(page, drugs.ascorbine); 
      await searchResults(page);
      await clickDrugItem(page);
    
      const getTextContent = aboutDrugPage.tabAboutDrug; 
      expect(await page.textContent(getTextContent)).toContain(tabs.aboutDrugTabUa);

      await addDrugToFavorite(page); 

      const currentUrl = page.url();
      expect(currentUrl).toContain(mainRoutes.favorites); 
      await expect(page.locator(aboutDrugPage.addedItemToSelected)).toBeVisible(); 
  }); 

  test('NC-TC-77: Delete Drug from Favorite', async ({ page }) => { 

    await baseSearch(page, drugs.ascorbine); 
    await searchResults(page);
    await clickDrugItem(page);
  
    const getTextContent = aboutDrugPage.tabAboutDrug; 
    expect(await page.textContent(getTextContent)).toContain(tabs.aboutDrugTabUa);

    await addDrugToFavorite(page); 

    const currentUrl = page.url();
    expect(currentUrl).toContain(mainRoutes.favorites); 
    await expect(page.locator(aboutDrugPage.addedItemToSelected)).toBeVisible(); 
    await deleteDrugFromFavorites(page);

}); 

  test('NC-TC-71: Verify Drug Dosing Unit Visibility', async ({ page }) => { 

    await baseSearch(page, drugs.ascorbine); 
    await searchResults(page);
    await clickDrugItem(page); 

    await expect(page.locator(aboutDrugPage.firstDosingUnit)).toBeVisible(); 
    await expect(page.locator(aboutDrugPage.dosingContent)).toBeVisible(); 
    
}); 

  test('NC-TC-73: Click the Other Drug Dosing Unit', async ({ page }) => { 

    await baseSearch(page, drugs.ascorbine); 
    await searchResults(page);
    await clickDrugItem(page); 

    await expect(page.locator(aboutDrugPage.firstDosingUnit)).toBeVisible(); 
    const firstUnitUrl = page.url();
    await page.click(aboutDrugPage.secondDosingUnit); 
    const secondUnitUrl = page.url(); 
    expect(firstUnitUrl).not.toEqual(secondUnitUrl);

}); 

test('NC-TC-72: Verify Drug Release Form Block Content', async ({ page }) => { 

  await baseSearch(page, drugs.ascorbine); 
  await searchResults(page);
  await clickDrugItem(page); 

  await expect(page.locator(aboutDrugPage.firstDosingUnit)).toBeVisible(); 
  await checkReleaseFormBlock(page);
  
  
}); 

test('NC-TC-80: Navigate to Instruction Section', async ({ page }) => { 

  await baseSearch(page, drugs.ascorbine); 
  await searchResults(page);
  await clickDrugItem(page); 

  await navigateInstructionBlock(page); 
  await expect(page.locator(aboutDrugPage.blockHowToUse)).toBeVisible();
  
}); 

test('NC-TC-200: Change Minimum Drug Price After Changing Geolocation on Favorites Page', async ({ page }) => { 

  await baseSearch(page, drugs.ascorbine); 
  await searchResults(page);
  await clickDrugItem(page);

  const getTextContent = aboutDrugPage.tabAboutDrug; 
  expect(await page.textContent(getTextContent)).toContain(tabs.aboutDrugTabUa);

  await addDrugToFavorite(page); 

  const currentUrl = page.url();
  expect(currentUrl).toContain(mainRoutes.favorites); 
  await expect(page.locator(aboutDrugPage.addedItemToSelected)).toBeVisible(); 

  await compareDrugMinPrice(page); 

}); 

test('NC-TC-70: Change Minimum Drug Price and Quantity of Drugstores After Changing Geolocation on About Drug Page', async ({ page }) => { 

  await baseSearch(page, drugs.ascorbine); 
  await searchResults(page);
  await clickDrugItem(page);

  const getTextContent = aboutDrugPage.tabAboutDrug; 
  expect(await page.textContent(getTextContent)).toContain(tabs.aboutDrugTabUa); 

  await compareDrugPriceQuantityInfo(page); 

});  


  test.afterEach(async ({ page }) => {
    await page.close();

  });

}); 

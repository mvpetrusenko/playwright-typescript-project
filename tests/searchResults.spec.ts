import { test, expect } from '@playwright/test';
import { baseSearch, changeLocalization, navigatorTo } from '../pages/HomePage'; 
import { drugs, messages, tabs } from '../fixtures/dictionary'; 
import { searchResults } from '../pages/SearchResultsPage'; 
import { mainPage, aboutDrugPage, searchResultsPage } from '../fixtures/selectors'; 

 

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
      await page.click(searchResultsPage.drugPhoto); 
      expect(await page.textContent(aboutDrugPage.tabAboutDrug)).toContain(tabs.aboutDrugTabUa); 
   

  }); 

  test('NC-TC-257: Auotocomplition < 3 Symbols', async ({ page }) => { 
    await baseSearch(page, drugs.lessThree); 
    expect(await page.textContent(searchResultsPage.searchMessage)).toContain(messages.minSearchRequestUa); 
    await page.click(mainPage.buttonSearch);

    await changeLocalization(page, 'ru'); 
    await baseSearch(page, drugs.lessThree); 
    expect(await page.textContent(searchResultsPage.searchMessage)).toContain(messages.minSearchRequestRu); 

}); 

test('NC-TC-278: Clear Search Input Field', async ({ page }) => { 
  await baseSearch(page, drugs.ascorbine); 
  await page.click(searchResultsPage.closeSearchBoxItem); 
  await page.waitForTimeout(1000);
  let value = await page.locator(mainPage.inputSearch).nth(1).inputValue(); 
  expect(value).toBe('');
 

}); 


test('NC-TC-258: Auotocomplition 3 Symbols', async ({ page }) => { 
  await baseSearch(page, drugs.threeSymbolsUa); 
  expect(await page.textContent(searchResultsPage.searchMessage)).toContain(messages.searchMessageUa); 
  await expect(page.locator(searchResultsPage.searchMessage)).toBeHidden();
  expect(await page.textContent(searchResultsPage.dropDownSearchResult)).toContain(drugs.highlightedTermUa); 
  await page.click(mainPage.buttonSearch);

  await changeLocalization(page, 'ru'); 
  await baseSearch(page, drugs.threeSymbolsRu); 
  expect(await page.textContent(searchResultsPage.searchMessage)).toContain(messages.searchMessageRu); 
  await expect(page.locator(searchResultsPage.searchMessage)).toBeHidden();
  expect(await page.textContent(searchResultsPage.dropDownSearchResult)).toContain(drugs.highlightedTermRu); 

}); 
  
    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });
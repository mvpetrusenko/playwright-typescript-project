import { test, expect } from '@playwright/test'; 
import { baseSearch, navigatorTo } from '../pages/HomePage'; 
import { drugs } from '../fixtures/dictionary';
import { mainRoutes } from '../fixtures/routes'; 
import { addProductToBasket } from '../pages/BasketPage'; 
import { clickOrderButton } from '../pages/PricesPage'; 
import { basketPage, pricesPage } from '../fixtures/selectors'; 
import { searchResults } from '../pages/SearchResultsPage';


test.describe('Orders Tests', () => {
    test.beforeEach(async ({ page }) => {
      await navigatorTo(page);
    });
  
    test('NC-TC-30 Add Drug to Basket', async ({ page }) => {
 
        await baseSearch(page, drugs.ascorbine); 
        await searchResults(page); 
        await clickOrderButton(page);
        await addProductToBasket(page);
      
        const currentUrl = page.url();
        expect(currentUrl).toContain(mainRoutes.cart); 
        await expect(page.locator(basketPage.addedItemToBasket)).toBeVisible();
      
    }); 

    test('NC-TC-41: Verify Drug Name is the Same on Prices and Basket Pages', async ({ page }) => {
 
      await baseSearch(page, drugs.ascorbine); 
      await searchResults(page); 

      await clickOrderButton(page); 
      const textDrugNamePrice = (await page.textContent(pricesPage.drugName)).trim(); 

      await addProductToBasket(page); 
      const textDrugNameBasket = (await page.textContent(basketPage.drugName)).trim();
      expect(textDrugNameBasket).toEqual(textDrugNamePrice);
    
  }); 

    test('NC-TC-42: Verify Drug Price is the Same on Prices and Basket Pages', async ({ page }) => {
 
      await baseSearch(page, drugs.ascorbine); 
      await searchResults(page); 
    
      await clickOrderButton(page); 
      const textDrugPricePrices = (await page.textContent(pricesPage.drugPrice)).trim();

      await addProductToBasket(page); 
      const textDrugPriceBasket = (await page.textContent(basketPage.drugPrice)).slice(0, -drugs.substringPrice.length).trim(); 
      expect(textDrugPriceBasket).toEqual(textDrugPricePrices);
  
});

    
  
    test.afterEach(async ({ page }) => {
      await page.close();
  });
});
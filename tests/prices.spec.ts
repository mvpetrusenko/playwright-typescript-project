import { test, expect } from '@playwright/test';
import { changeGeoLocationPricesPage, navigatorTo } from '../pages/HomePage'; 
import { goToPricesPage, sortFromCheap } from '../pages/PricesPage';
import { basketPage, pricesPage } from '../fixtures/selectors';
import { components, drugs, sorting, tabs } from '../fixtures/dictionary'; 



 

test.describe('Prices Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-119: Default Sorting on Prices Page', async ({ page }) => {

        await goToPricesPage(page); 
        const defaultSorting = await page.textContent(pricesPage.defaultSortingTab);
        expect(defaultSorting).toContain(sorting.timeOnRoad); 
     
      

    }); 

    test('NC-TC-125: Verify UI Drugstores List If > 20', async ({ page }) => {

        await goToPricesPage(page); 
        await expect(page.locator(pricesPage.firstDrugStore)).toBeVisible();
        await expect(page.locator(pricesPage.twentiethDrugStore)).toBeVisible(); 
        const downloadMore = await page.textContent(pricesPage.buttonDownloadMore);
        expect(downloadMore).toContain(components.downloadMore); 
        
    }); 

    test('NC-TC-126: Check Download More Button', async ({ page }) => {

        await goToPricesPage(page); 
        await page.click(pricesPage.buttonDownloadMore); 
        await expect(page.locator(pricesPage.twentyfirstDrugStore)).toBeVisible();
        await expect(page.locator(pricesPage.fortiethDrugStore)).toBeVisible(); 

    }); 

    test('NC-TC-127: Verify UI Drugstores List If < 20', async ({ page }) => {

        await goToPricesPage(page); 
        await changeGeoLocationPricesPage(page, components.citySmall); 
        expect(await page.textContent(pricesPage.tabInOhterCities)).toContain(tabs.inOtherCities); 

    }); 

    test('NC-TC-140: Set Route with Route Button', async ({ page }) => {

        await goToPricesPage(page); 
        await page.click(pricesPage.buttonRoute); 
        await page.click(pricesPage.buttonCloseRouteModalWindow); 
        await expect(page.locator(pricesPage.routeLine)).toBeVisible();
        

    }); 

    test('NC-TC-144: Check Increase Drug Quantity Button', async ({ page }) => {

        await goToPricesPage(page); 
        await page.click(pricesPage.buttonIncrease); 
        expect(await page.textContent(pricesPage.counter)).toContain(drugs.quantityMore); 
        expect(await page.textContent(pricesPage.buttonInBasket)).toContain(tabs.inBasket); 
        await page.click(basketPage.buttonBasket); 
        await expect(page.locator(basketPage.addedItemToBasket)).toBeVisible();
        
    }); 

    test('NC-TC-145: Check Decrease Drug Quantity Button', async ({ page }) => {

        await goToPricesPage(page); 
        await page.click(pricesPage.buttonIncrease); 
        expect(await page.textContent(pricesPage.counter)).toContain(drugs.quantityMore); 

        await page.click(pricesPage.buttonDecrease); 
        expect(await page.textContent(pricesPage.counter)).toContain(drugs.quantityLess); 
 
        await page.click(basketPage.buttonBasket); 
        await expect(page.locator(basketPage.emptyBasket)).toBeVisible();
        
    }); 

    test('NC-TC-120: Check Sorting From Cheap', async ({ page }) => {

        await goToPricesPage(page); 
        await sortFromCheap(page);
        
        
    }); 

  
    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });
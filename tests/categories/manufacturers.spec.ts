import { test, expect } from '@playwright/test';
import { navigatorTo } from '../../pages/HomePage'; 
import { manufacturersPage } from '../../fixtures/selectors';
import { navigatingManufacturersTabs } from '../../pages/ManufacturersPage'; 


 

test.describe('Manufacturers Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-949: Navigate Manufacturers Tabs', async ({ page }) => {
     
      await navigatingManufacturersTabs(page); 
      await expect(page.locator(manufacturersPage.activeLetter)).toBeVisible();

    }); 

    test('NC-TC-951: Go to Manufacturer Page', async ({ page }) => {
     
        await navigatingManufacturersTabs(page); 
        await expect(page.locator(manufacturersPage.activeLetter)).toBeVisible(); 
        await page.click(manufacturersPage.manufacturerItem); 
        await expect(page.locator(manufacturersPage.manufactureInfo)).toBeVisible(); 

  
      });
  
    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });
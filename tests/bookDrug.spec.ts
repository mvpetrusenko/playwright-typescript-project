import { test, expect } from '@playwright/test';
import { navigatorTo } from '../pages/HomePage'; 
import { loginData, tabs } from '../fixtures/dictionary';
import { buyerProfilePage, mapPage, pricesPage, profilePage, thanksForOrderPage } from '../fixtures/selectors'; 
import { mainRoutes } from '../fixtures/routes'; 
import { orderDrug } from '../pages/BookDrugPage'; 
import { goToLoginPage, validLogin } from '../pages/LogInPage'; 
import { aboutDrugPage } from '../fixtures/selectors'; 

 

test.describe('Book Drug Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-45: Make Order with Registered Phone Number', async ({ page }) => {
     
      await orderDrug(page); 
      expect(page.url()).toContain(mainRoutes.order); 

    });

    test('NC-TC-183: Drug Name is Clickable on Thanks For Order Page', async ({ page }) => {
     
      await orderDrug(page); 
      await goToLoginPage(page);
      await validLogin(page, loginData.phoneNumber, loginData.password); 
      await page.click(buyerProfilePage.buttonLogIn); 
      await page.click(profilePage.firstOrderOnProfilePage); 
      await page.click(profilePage.drugTextOrder); 
      expect(await page.textContent(aboutDrugPage.tabAboutDrug)).toContain(tabs.aboutDrugTabUa); 

    }); 

    test('NC-TC-56: Make Route After Clicking Drugstore Address', async ({ page }) => {
     
      await orderDrug(page); 
      await page.click(thanksForOrderPage.drugAddressOrder); 
      expect(await page.textContent(mapPage.tabMap)).toContain(tabs.map); 
      await expect(page.locator(pricesPage.routeModalWindow)).toBeVisible();
      await page.click(pricesPage.buttonCloseRouteModalWindow); 
      await expect(page.locator(pricesPage.routeLine)).toBeVisible();
      
    });
  
    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });
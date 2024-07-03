import { Page, expect } from '@playwright/test';  
import { mainPage } from '../fixtures/selectors'; 
import { mainRoutes } from '../fixtures/routes';

export async function goToAllDrugStoresPage(page: Page) {
    await page.waitForSelector(mainPage.buttonAllDrugStores, { state: 'visible' }); 
    await page.click(mainPage.buttonAllDrugStores); 
    expect(page.url()).toContain(mainRoutes.allDrugStores);
} 
import { Page, expect } from '@playwright/test';  
import { mainPage} from '../fixtures/selectors';

export async function searchResults (page: Page) { 

    await page.waitForSelector(mainPage.buttonSearch, { state: 'visible' }); 
    //expect(page.locator(mainPage.buttonSearch)).toBeVisible({ timeout: 20000 });
    await page.click(mainPage.buttonSearch);
    await page.waitForSelector(mainPage.searchResult, { state: 'visible' });
    
  }
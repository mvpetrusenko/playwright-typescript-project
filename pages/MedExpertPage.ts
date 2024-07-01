import { Page } from '@playwright/test'; 
import { mainPage } from '../fixtures/selectors';


export async function goToMedExpertProfile(page: Page) { 
    await page.waitForSelector(mainPage.buttonLogin, { state: 'visible' });
    await page.click(mainPage.buttonLogin); 
    await page.waitForSelector(mainPage.buttonMedExpertProfile, { state: 'visible' });
    await page.click(mainPage.buttonMedExpertProfile); 
  
  }
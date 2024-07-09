import { Page } from '@playwright/test'; 
import { cyrillicLettersArray, cyrillicLettersArrayManufacturers, latinLettersArray, latinLettersArrayManufacturers, mainPage, manufacturersPage } from '../fixtures/selectors'; 
 


type CyrillicLettersArrayKey = keyof typeof cyrillicLettersArrayManufacturers; 
type LatinLettersArrayKey = keyof typeof latinLettersArrayManufacturers;

export async function getRandomItemFromArrays(): Promise<string> {
    const combinedArray = { ...cyrillicLettersArrayManufacturers, ...latinLettersArrayManufacturers };
    const keys = Object.keys(combinedArray) as (CyrillicLettersArrayKey | LatinLettersArrayKey)[];
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return combinedArray[randomKey];
  }
  
 
  export async function navigatingManufacturersTabs(page: Page) {
    const randomKey = await getRandomItemFromArrays();
  
    await page.waitForSelector(mainPage.buttonCategories, { state: 'visible' });
    await page.click(mainPage.buttonCategories);
    await page.waitForSelector(manufacturersPage.manufacturers, { state: 'visible' });
    await page.click(manufacturersPage.manufacturers);
    await page.waitForSelector(randomKey, { state: 'visible' });
    await page.click(randomKey);
    await page.waitForSelector(manufacturersPage.homeBreadcrumbs, { state: 'visible' });
  }
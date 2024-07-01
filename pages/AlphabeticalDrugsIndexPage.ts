import { Page } from '@playwright/test'; 
import { cyrillicLettersArray, latinLettersArray, numbersArray, mainPage, alphabeticalIndexPage } from '../fixtures/selectors'; 


type CyrillicLettersArrayKey = keyof typeof cyrillicLettersArray; 
type LatinLettersArrayKey = keyof typeof latinLettersArray;
type NumbersArrayKey = keyof typeof numbersArray;

export async function getRandomItemFromArrays(): Promise<string> {
    const combinedArray = { ...cyrillicLettersArray, ...latinLettersArray, ...numbersArray };
    const keys = Object.keys(combinedArray) as (CyrillicLettersArrayKey | LatinLettersArrayKey | NumbersArrayKey)[];
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return combinedArray[randomKey];
  }
  
 
  export async function navigatingAlphabeticalIndexTabs(page: Page) {
    const randomKey = await getRandomItemFromArrays();
  
    await page.waitForSelector(mainPage.buttonCategories, { state: 'visible' });
    await page.click(mainPage.buttonCategories);
    await page.waitForSelector(alphabeticalIndexPage.alphabeticalIndex, { state: 'visible' });
    await page.click(alphabeticalIndexPage.alphabeticalIndex);
    await page.waitForSelector(randomKey, { state: 'visible' });
    await page.click(randomKey);
    await page.waitForSelector(alphabeticalIndexPage.homeBreadcrumbs, { state: 'visible' });
  }
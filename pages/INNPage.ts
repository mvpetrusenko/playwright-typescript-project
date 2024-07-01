import { Page } from '@playwright/test'; 
import { cyrillicLettersArray, innPage, mainPage } from '../fixtures/selectors'; 


type LettersArrayKey = keyof typeof cyrillicLettersArray;

export async function getRandomItemFromLettersArray(): Promise<string> {
  const keys = Object.keys(cyrillicLettersArray) as LettersArrayKey[];
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return cyrillicLettersArray[randomKey];
}


export async function navigatingInnTabs(page: Page) {
  const randomKey = await getRandomItemFromLettersArray(); 

  await page.waitForSelector(mainPage.buttonCategories, { state: 'visible' });
  await page.click(mainPage.buttonCategories); 
  await page.waitForSelector(innPage.innClassification, { state: 'visible' });
  await page.click(innPage.innClassification); 
  await page.waitForSelector(randomKey, { state: 'visible' });
  await page.click(randomKey); 
  await page.waitForSelector(innPage.homeBreadcrumbs, { state: 'visible' });
}







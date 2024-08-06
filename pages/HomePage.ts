import { Page } from '@playwright/test'; 
import { expect } from '@playwright/test'; 
import { mainPage, aboutDrugPage } from '../fixtures/selectors'; 
import { mainConfig } from '../fixtures/constants'; 
import { components } from '../fixtures/dictionary'; 
import { mainRoutes } from '../fixtures/routes'; 


// npx playwright test --ui 
// npx playwright test --ui

export async function changeGeoLocationPricesPage(page: Page, city: string) { 

  await page.waitForSelector(mainPage.buttonAddress, { state: 'visible' });
  await page.click(mainPage.buttonAddress); 
  await page.waitForSelector(mainPage.buttonChangeCity, { state: 'visible' });
  await page.click(mainPage.buttonChangeCity); 
  await page.waitForSelector(mainPage.inputSearchCity, { state: 'visible' }); 
  await page.fill(mainPage.inputSearchCity, city); 
  await page.click(mainPage.buttonSearchCity); 
  await page.waitForSelector(mainPage.firstCitySuggestion, { state: 'visible' });
  await page.click(mainPage.firstCitySuggestion); 
  await page.waitForSelector(mainPage.buttonCategories, { state: 'visible' });
  //expect(await page.textContent(mainPage.buttonAddress)).toContain(components.city); 
  
} 


  export async function baseSearch(page: Page, term: string) :Promise<void> {
 
    await page.waitForSelector( mainPage.headerWrapper, { state: 'hidden' });

    await page.evaluate(selector => {
      const element = document.querySelector(selector);
      if (element) element.setAttribute('style', 'display: block;');
    }, mainPage.headerWrapper);

    await page.waitForSelector(mainPage.inputSearch, { state: 'visible' }); 
    await page.fill(mainPage.inputSearch, term);


  } 

  export async function clickDrugItem(page: Page) { 

    await page.waitForSelector(mainPage.firstResult, { state: 'visible' });
    await page.click(mainPage.firstResult); 
    await page.waitForSelector(aboutDrugPage.tabAboutDrug, { state: 'visible' });
  } 

  export async function navigatorTo(page: Page){
    await page.goto(mainConfig.baseUrl);  
    const currentUrl = page.url();
    expect(currentUrl).toContain(mainConfig.baseUrl);
} 

export async function changeLocalization (page: Page, language: string) {

  const ru = 'ru'; 

  if(language === ru) {
    await page.waitForSelector(mainPage.ruSwitcher, { state: 'visible' }); 
    await page.click(mainPage.ruSwitcher); 
  } 
  else {
    await page.waitForSelector(mainPage.uaSwitcher, { state: 'visible' }); 
    await page.click(mainPage.uaSwitcher); 
  }
} 

export async function clickTopDrugPhoto (page: Page) {

    await page.waitForSelector(mainPage.topDrugsSection, { state: 'visible' }); 
    await page.waitForSelector(mainPage.topDrugPhoto, { state: 'visible' }); 
    await page.click(mainPage.topDrugPhoto); 
    await page.waitForSelector(aboutDrugPage.tabsInstruction, { state: 'visible' }); 

} 

export async function addDrugToFavorites (page: Page) {

    await page.click(mainPage.buttonFavorites); 
    expect(page.url()).toContain(mainRoutes.favorites); 
    await expect(page.locator(aboutDrugPage.addedItemToSelected)).toBeVisible(); 
  
} 

export async function deleteDrugFromFavorites(page: Page) {

    await page.click(aboutDrugPage.selectedHeartIcon); 
    await expect(page.locator(aboutDrugPage.emptyFavoritesPage)).toBeVisible(); 

}
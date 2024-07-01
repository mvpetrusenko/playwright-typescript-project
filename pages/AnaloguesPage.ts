import { Page } from '@playwright/test'; 
import { expect } from '@playwright/test'; 
import { analoguePage } from '../fixtures/selectors'; 
import { drugs } from '../fixtures/dictionary'; 
import { filterAnaloguesResult } from '../fixtures/dictionary'; 
import { baseSearch, clickDrugItem } from '../pages/HomePage'; 
import { searchResults } from '../pages/SearchResultsPage'; 


export async function goToAnalogueTab(page: Page) {
  await baseSearch(page, drugs.ascorbine); 
  await searchResults(page);
  await clickDrugItem(page);  
  await page.waitForSelector(analoguePage.tabAnalogues, { state: 'visible' });
  await page.click(analoguePage.tabAnalogues);

}

  export async function navigateToLastBreadCrumbsTabs(page: Page) {
    await page.waitForSelector(analoguePage.endArrowToBreadcrumbs, { state: 'visible' });
    await page.click(analoguePage.endArrowToBreadcrumbs); 
    await page.waitForSelector(analoguePage.lastBreadcrumb); 
      
  } 

  export async function navigateToPreLastBreadCrumbsTabs(page: Page) {
    await page.waitForSelector(analoguePage.preLastBreadcrumb, { state: 'visible' });
    await page.click(analoguePage.preLastBreadcrumb); 
  
  } 

  export async function navigateToHomeBreadCrumbsTabs(page: Page) {
    await page.waitForSelector(analoguePage.homeBreadcrumb, { state: 'visible' });
    await page.click(analoguePage.homeBreadcrumb); 
      
  } 

  export async function addDrugToFavoriteAnaloguesPage(page: Page) { 

      await page.waitForSelector(analoguePage.buttonFavorite, { state: 'hidden' });
      //await page.waitForSelector(analoguePage.buttonFavorite, { state: 'visible' });
      await page.click(analoguePage.buttonFavorite); 
      await page.waitForSelector(analoguePage.selectedButtonFavorite, { state: 'visible' }); 
    
  } 


  export async function activateFilterCheckboxes(page: Page) { 

    await page.waitForSelector(analoguePage.buttonFilter, { state: 'hidden' }); 
    await page.click(analoguePage.chechboxTablets); 
    await (page.locator(analoguePage.chechboxTablets)).isChecked(); 
    await page.click(analoguePage.checkboxDosingFifty); 
    await (page.locator(analoguePage.checkboxDosingFifty)).isChecked(); 
    await page.click(analoguePage.checkboxQuantityFifty); 
    await (page.locator(analoguePage.checkboxQuantityFifty)).isChecked(); 
    await page.click(analoguePage.checkboxManufacturerLubnifarm); 
    await (page.locator(analoguePage.checkboxManufacturerLubnifarm)).isChecked();

} 
  
export async function checkFiltersResultBlock(page: Page) { 
  await page.waitForSelector(analoguePage.firstFilterResult, { state: 'visible' }); 
  const descriptionBlock = await page.textContent(analoguePage.drugItemDescription);
  expect(descriptionBlock).toContain(filterAnaloguesResult.drugInfo); 
  const manufacturerBlock = await page.textContent(analoguePage.drugItemManufacturer);
  expect(manufacturerBlock).toContain(filterAnaloguesResult.manufacturer); 
}
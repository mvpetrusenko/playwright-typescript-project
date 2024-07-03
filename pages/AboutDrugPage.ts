import { Page, expect } from '@playwright/test'; 
import { aboutDrugPage, categories} from '../fixtures/selectors';
import { releaseFormBlock, components } from '../fixtures/dictionary'; 
import { changeGeoLocationCategoriesPage } from '../pages/CategoriesPage';


export async function addDrugToFavorite(page: Page) { 

  await page.waitForSelector(aboutDrugPage.unSelectedHeartIcon, { state: 'hidden' });

  await page.evaluate(selector => {
    const element = document.querySelector(selector);
    if (element) element.setAttribute('style', 'display: block;');
  }, aboutDrugPage.unSelectedHeartIcon);
    
    await page.click(aboutDrugPage.unSelectedHeartIcon); 
    await page.waitForSelector(aboutDrugPage.selectedHeartIcon, { state: 'visible' }); 
    await page.click(aboutDrugPage.buttonSelected); 
  
} 

export async function checkReleaseFormBlock(page: Page) {

  const releaseBlock = await page.textContent(aboutDrugPage.releaseFormBlock);
  expect(releaseBlock).toContain(releaseFormBlock.manufacturer); 
  expect(releaseBlock).toContain(releaseFormBlock.releaseForm); 
  expect(releaseBlock).toContain(releaseFormBlock.dosing); 
  expect(releaseBlock).toContain(releaseFormBlock.quantity); 
  expect(releaseBlock).toContain(releaseFormBlock.atcGroup); 
}

  
export async function navigateInstructionBlock(page: Page) {
  await page.waitForSelector(aboutDrugPage.blockInstruction, { state: 'visible' });  
  await page.click(aboutDrugPage.linkHowToUse);  
  await page.waitForSelector(aboutDrugPage.blockHowToUse, { state: 'visible' });

} 

export async function compareDrugMinPrice(page: Page) {
  let minPriceFrom1 = await page.textContent(categories.minPriceFrom);
 await changeGeoLocationCategoriesPage(page, components.city1); 
 let minPriceFrom2 = await page.textContent(categories.minPriceFrom);
 expect(minPriceFrom1).not.toEqual(minPriceFrom2); 

} 

export async function compareDrugPriceQuantityInfo(page: Page) {
  let quantityCity1 = await page.textContent(aboutDrugPage.quantityInDrugStores); 
  let minPriceFrom1 = await page.textContent(aboutDrugPage.minPriceFrom);
 await changeGeoLocationCategoriesPage(page, components.city1); 
 let quantityCity2 = await page.textContent(aboutDrugPage.quantityInDrugStores); 
 let minPriceFrom2 = await page.textContent(aboutDrugPage.minPriceFrom);
 expect(quantityCity1).not.toEqual(quantityCity2); 
 expect(minPriceFrom1).not.toEqual(minPriceFrom2); 

}
  

  
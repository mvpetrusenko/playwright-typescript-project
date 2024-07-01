import { Page } from '@playwright/test'; 
import { expect } from '@playwright/test';
import { aboutDrugPage} from '../fixtures/selectors';
import { releaseFormBlock } from '../fixtures/dictionary';


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
  

  
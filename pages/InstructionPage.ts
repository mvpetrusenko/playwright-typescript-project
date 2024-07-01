import { Page } from '@playwright/test'; 
import { aboutDrugPage, analoguePage, instructionPage } from '../fixtures/selectors'; 
import { drugs } from '../fixtures/dictionary'; 
import { baseSearch, clickDrugItem } from '../pages/HomePage'; 
import { searchResults } from '../pages/SearchResultsPage'; 


export async function goToInstructionTab(page: Page) {
    await baseSearch(page, drugs.ascorbine); 
    await searchResults(page);
    await clickDrugItem(page);  
    await page.waitForSelector(instructionPage.tabInstructionAboutDrug, { state: 'visible' });
    await page.click(instructionPage.tabInstructionAboutDrug); 
    await page.waitForSelector(instructionPage.sectionInstruction, { state: 'visible' });
  
  }


  export async function goToAnaloguesFromInstruction(page: Page) {
    await goToInstructionTab(page); 
    await page.click(analoguePage.tabAnalogues); 
    await page.waitForSelector(aboutDrugPage.tabsInstruction, { state: 'visible' });

  }
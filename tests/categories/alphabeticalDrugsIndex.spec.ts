import { test, expect } from '@playwright/test';
import { navigatorTo } from '../../pages/HomePage'; 
import { navigatingAlphabeticalIndexTabs } from '../../pages/AlphabeticalDrugsIndexPage';
import { alphabeticalIndexPage } from '../../fixtures/selectors';

 

test.describe('Alphabetical Index Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-928: Navigate Alphabetical Drugs Index Tabs', async ({ page }) => {
     
      await navigatingAlphabeticalIndexTabs(page); 
      await expect(page.locator(alphabeticalIndexPage.activeLetter)).toBeVisible();

    });
  
    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });
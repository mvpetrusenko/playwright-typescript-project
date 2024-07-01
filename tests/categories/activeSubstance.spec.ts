import { test, expect } from '@playwright/test';
import { navigatorTo } from '../../pages/HomePage'; 
import { navigatingInnTabs } from '../../pages/INNPage';  
import { innPage } from '../../fixtures/selectors';
 

test.describe('Active Substance Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-899 Navigate Active Substance Alphabet Pagination Tabs', async ({ page }) => {
     
      await navigatingInnTabs(page); 
      await expect(page.locator(innPage.activeLetter)).toBeVisible();

    });
  
    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });

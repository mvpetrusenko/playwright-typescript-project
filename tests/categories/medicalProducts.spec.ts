import { test, expect } from '@playwright/test';
import { navigatorTo } from '../../pages/HomePage'; 
 

test.describe('Medical Products Category Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-899 Navigate Active Substance Alphabet Pagination Tabs', async ({ page }) => {
     

    });
  
    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });
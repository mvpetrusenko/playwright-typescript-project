import { test, expect } from '@playwright/test';
import { navigatorTo } from '../../pages/HomePage'; 
 

test.describe('Dietary Supplements Category Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-529 Change GeoLocation on Third Subcategory Drug Page', async ({ page }) => {
     

    });
  
    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });
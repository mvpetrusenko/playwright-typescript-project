import { test, expect } from '@playwright/test'; 
import { navigatorTo } from '../pages/HomePage'; 
import { mainPage, newsPage } from '../fixtures/selectors';
import { components } from '../fixtures/dictionary';
import { mainRoutes } from '../fixtures/routes';



test.describe('News Page Tests', () => {
    test.beforeEach(async ({ page }) => {
      await navigatorTo(page);
    });
  
    test('NC-TC-962: Go To News Page', async ({ page }) => { 

        expect(await page.textContent(mainPage.newsText)).toContain(components.news); 
        await page.click(mainPage.newsText); 
        expect(await page.textContent(newsPage.newsArticleTitle)).toContain(components.news); 

    }); 

    test('NC-TC-966: Redirection After All News Button Click', async ({ page }) => { 
        
        await page.click(mainPage.buttonAllNews); 
        expect(page.url()).toContain(mainRoutes.news);  
        expect(await page.textContent(newsPage.titleAllNews)).toContain(components.allNews); 

    }); 
  
    test.afterEach(async ({ page }) => {
      await page.close();
  });
});
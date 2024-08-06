// import { test, expect } from '@playwright/test';
// import { navigatorTo } from '../pages/HomePage'; 
// import { invalidPasswordLogin, goToLoginPage, validLogin } from '../pages/LogInPage'; 
// import { buyerProfilePage, mainPage, profilePage } from '../fixtures/selectors';
// import { loginData, tabs } from '../fixtures/dictionary';



// test.describe('Login Tests', () => {
//     test.beforeEach(async ({ page }) => {
//         await navigatorTo(page);
//       });
  
//     test('NC-TC-775: Registered Phone Number and Valid Password', async ({ page }) => { 
//         await goToLoginPage(page);
//         await validLogin(page, loginData.phoneNumber, loginData.password); 
//         await page.click(buyerProfilePage.buttonLogIn); 
//         expect(await page.textContent(profilePage.tabMyOrders)).toContain(tabs.myOrders);
         
//     }); 

//     test('NC-TC-770: Return Back From Login Page', async ({ page }) => { 
//         await goToLoginPage(page);
//         await page.goBack();
//         await expect(page.locator(mainPage.jumbotron)).toBeVisible();
         
//     }); 

//     test('NC-TC-783: Check Password Visibility on Login Page', async ({ page }) => { 
//         await goToLoginPage(page);
//         await validLogin(page, loginData.phoneNumber, loginData.password); 
//         await page.click(buyerProfilePage.buttonViewPassword); 
//         await expect(page.locator(buyerProfilePage.visiblePassword)).toBeVisible(); 
//         await page.click(buyerProfilePage.buttonViewPassword); 
//         await expect(page.locator(buyerProfilePage.hiddenPassword)).toBeVisible();

         
//     }); 

//     test('NC-TC-784: Registered Phone Number and Invalid Password', async ({ page }) => { 
//         await goToLoginPage(page);
//         await invalidPasswordLogin(page, loginData.phoneNumber, loginData.invalidPassword); 
//         await page.click(buyerProfilePage.buttonLogIn); 
//         expect(await page.textContent(buyerProfilePage.invalidLoginMessage)).toContain(loginData.invalidLoginDataMessage);
         
//     });
  
//     test.afterEach(async ({ page }) => {
//         await page.close();
//     });
//   });
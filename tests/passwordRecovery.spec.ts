// import { test, expect } from '@playwright/test';
// import { navigatorTo } from '../pages/HomePage'; 
// import { goToLoginPage } from '../pages/LogInPage';  
// import { loginData } from '../fixtures/dictionary';
// import { fillInErrorPhone, fillInInvalidPhone, fillInValidPhone, checkInvalidPhoneMessage } from '../pages/PasswordRecoveryPage';
// import { buyerProfilePage, resetPasswordPage } from '../fixtures/selectors';

 

// test.describe('Password Recovery Tests', () => {
//     test.beforeEach(async ({ page }) => {
//         await navigatorTo(page);
//       });
  
//     test('NC-TC-755: Invalid Phone Number on Reset Password Page', async ({ page }) => {
     
//         await goToLoginPage(page); 
//         await page.click(buyerProfilePage.buttonResetPassword);
//         await fillInInvalidPhone(page, loginData.invalidPhone); 
//         await checkInvalidPhoneMessage(page);

//     }); 

//     test('NC-TC-756: Phone Number with Error on Reset Password Page', async ({ page }) => {
     
//         await goToLoginPage(page); 
//         await page.click(buyerProfilePage.buttonResetPassword);
//         await fillInErrorPhone(page, loginData.errorPhone); 
//         await checkInvalidPhoneMessage(page);

//     }); 

//     test('NC-TC-803: Return Back From Reset Password Step 2 Page', async ({ page }) => {
     
//         await goToLoginPage(page); 
//         await page.click(buyerProfilePage.buttonResetPassword);
//         await fillInValidPhone(page, loginData.phoneNumber); 
//         await page.click(resetPasswordPage.buttonContinueEnabled); 
//         await expect(page.locator(resetPasswordPage.loader)).toBeVisible({ timeout: 20000 });
//         await expect(page.locator(resetPasswordPage.loader)).toBeHidden({ timeout: 20000 });
//         await expect(page.locator(resetPasswordPage.formResetPasswordStep2)).toBeVisible({ timeout: 10000 }); 
//         await page.goBack(); 
//         await expect(page.locator(resetPasswordPage.formResetPasswordStep1)).toBeVisible();

//     });
  
//     test.afterEach(async ({ page }) => {
//         await page.close();
//     });
//   });
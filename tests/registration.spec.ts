import { test, expect } from '@playwright/test';
import { navigatorTo } from '../pages/HomePage'; 
import { goToRegistrationPage, fillInErrorPhone } from '../pages/RegistrationPage'; 
import { checkInvalidPhoneMessage } from '../pages/PasswordRecoveryPage';
import { loginData } from '../fixtures/dictionary';


test.describe('Registration Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-845: Phone Number with Error on Registration Page', async ({ page }) => {
     
      await goToRegistrationPage(page); 
      await fillInErrorPhone(page, loginData.errorPhone); 
      await checkInvalidPhoneMessage(page);
      
      

    });
  
    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });
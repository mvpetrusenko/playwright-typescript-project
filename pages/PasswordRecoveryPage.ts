import { Page } from '@playwright/test'; 
import { expect } from '@playwright/test'; 
import { buyerProfilePage, resetPasswordPage } from '../fixtures/selectors'; 
import { loginData } from '../fixtures/dictionary'; 


  export async function recoverPassword(page: Page) {
    
    await page.click(buyerProfilePage.buttonResetPassword); 
    await page.waitForSelector(resetPasswordPage.formResetPasswordStep1, { state: 'visible' });
 
} 

export async function fillInValidPhone(page: Page, validResetPhone: string) { 
    await page.fill(resetPasswordPage.inputResetPasswordPhone, validResetPhone); 
    
  }  


export async function fillInInvalidPhone(page: Page, invalidResetPhone: string) { 
    await page.fill(resetPasswordPage.inputResetPasswordPhone, invalidResetPhone); 
    
  } 

  export async function fillInErrorPhone(page: Page, errorResetPhone: string) { 
    await page.fill(resetPasswordPage.inputResetPasswordPhone, errorResetPhone); 
    
  } 

  export async function checkInvalidPhoneMessage(page: Page) { 
    expect(await page.textContent(resetPasswordPage.invalidPhoneMessage)).toContain(loginData.invalidPhoneMessage); 
    await expect(page.locator(resetPasswordPage.buttonContinueDisabled)).toBeVisible();
  } 
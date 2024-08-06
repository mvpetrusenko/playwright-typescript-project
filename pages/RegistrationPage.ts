import { Page } from '@playwright/test'; 
import { expect } from '@playwright/test'; 
import { buyerProfilePage, registrationPage } from '../fixtures/selectors'; 
import { goToLoginPage } from '../pages/LogInPage'; 


export async function goToRegistrationPage(page: Page) {
    
    await goToLoginPage(page); 
    await page.waitForSelector(buyerProfilePage.buttonRegistration, { state: 'visible' });
    await page.click(buyerProfilePage.buttonRegistration); 
    await page.waitForSelector(registrationPage.formRegistration, { state: 'visible' });

} 

export async function fillInErrorPhone(page: Page, errorResetPhone: string) { 
    await page.fill(registrationPage.inputRegistrationPhone, errorResetPhone); 
    
  }
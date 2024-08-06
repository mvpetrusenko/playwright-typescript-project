// import { test, expect } from '@playwright/test';
// import { navigatorTo } from '../pages/HomePage'; 
// import { goToMedExpertProfile } from '../pages/MedExpertPage'; 
// import { medExpertProfilePage } from '../fixtures/selectors'; 

 

// test.describe('Medical Expert Profile Tests', () => {
//     test.beforeEach(async ({ page }) => {
//         await navigatorTo(page);
//       });
  
//     test('NC-TC-894: Enter Medical Expert Profile', async ({ page }) => {
     
//       await goToMedExpertProfile(page); 
//       await expect(page.locator(medExpertProfilePage.formDoctorLogin)).toBeVisible();

//     });
  
//     test.afterEach(async ({ page }) => {
//         await page.close();
//     });
//   });
import { faker } from '@faker-js/faker';
import { expect } from 'playwright/test';
import { test } from '../fixtures/fixtures.js';
import { USstates } from '../states.js';

const personalInfo = {
  socialTitle: 'Mrs.',
  firstName: 'Maryna',
  lastName: 'Test',
  email: faker.internet.email(),
  password: 'Qwerty123!',
  birthDate: '12/12/1992',
} as const;

const addressesInfo = {
  city: 'Alabama',
  state: USstates.Alabama,
  ZipCode: '12345',
  address: 'Park avenue 34',
  phone: '5556789',
  companyName: 'Test',
  addressComplement: 'Test info',
};

// test
test(
  'Buying a product check',
  { tag: '@FinalProject011' },
  async function ({
    headerElements,
    productPage,
    successfulMessage,
    cartPage,
    clothesPage,
    checkoutPage,
  }) {
    await test.step('Adding product to the cart and going to checkout', async () => {
      await headerElements.navigateToClothesPage();
      await clothesPage.locators.getBaseCardLocator('Hummingbird printed sweater').click();
      await expect(productPage.locators.productTitle).toBeVisible();
      await productPage.addToCart();
      await expect(successfulMessage.locators.proceedToCheckoutButton).toBeVisible();
      await successfulMessage.proceedToCheckoutClick();
      await cartPage.locators.proceedToCheckoutButton.click();
      await expect(checkoutPage.locators.firstSTepTitle).toBeVisible();
    });

    await test.step('Filling in personal info - First step', async () => {
      await checkoutPage.personalInfoFilling(
        personalInfo.socialTitle,
        personalInfo.firstName,
        personalInfo.lastName,
        personalInfo.email,
        personalInfo.password,
        personalInfo.birthDate
      );
      await checkoutPage.locators.continueButton.click();
    });

    await test.step('Filling in addresses info - Second step', async () => {
      await checkoutPage.addressesFilling(
        addressesInfo.city,
        addressesInfo.state,
        addressesInfo.ZipCode,
        addressesInfo.address,
        addressesInfo.phone,
        addressesInfo.companyName,
        addressesInfo.addressComplement
      );
      await checkoutPage.locators.continueButton.click();
    });

    await test.step('Filling in delivery message - Third Step', async () => {
      await checkoutPage.addDeliveryComment('This is a test order');
      await checkoutPage.locators.continueButton.click();
    });

    await test.step('Choose payment method and place order - Fourth Step', async () => {
      await checkoutPage.choosePaymentMethod('check');
      await checkoutPage.placeOrder();
      await expect(checkoutPage.locators.confirmedOrder).toBeVisible();
    });
  }
);

import type { Page } from '@playwright/test';
import type { USstates } from '../../states.js';
import { BasePage } from '../Base/BasePage.js';
import { CheckoutPageLocators } from './CheckoutPageLocators.js';

export class CheckoutPage extends BasePage {
  locators: CheckoutPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new CheckoutPageLocators(this.page.locator('body'));
  }

  async personalInfoFilling(
    socialTitle: 'Mr.' | 'Mrs.',
    firstName: string,
    lastName: string,
    email: string,
    password?: string,
    birthDate?: string
  ) {
    if (socialTitle == 'Mr.') {
      await this.locators.mrRadioButton.click();
    } else if (socialTitle == 'Mrs.') {
      await this.locators.mrsRadioButton.click();
    } else {
      throw new Error("Social title must be 'Mr.' or 'Mrs.' ");
    }

    await this.locators.firstNameInput.fill(firstName);
    await this.locators.lastNameInput.fill(lastName);
    await this.locators.emailInput.fill(email);

    if (password) {
      await this.locators.passwordInput.fill(password);
    }

    if (birthDate) {
      await this.locators.birthdate.fill(birthDate);
    }

    await this.locators.agreeTermsCheckbox.click();
  }

  async addressesFilling(
    city: string,
    state: USstates,
    ZipCode: string,
    address?: string,
    phone?: string,
    companyName?: string,
    addressComplement?: string
  ) {
    await this.locators.cityInput.fill(city);

    await this.locators.stateInput.selectOption(state);
    // await this.page.keyboard.press('enter');

    await this.locators.ZipInput.fill(ZipCode);

    if (address) {
      await this.locators.addressInput.fill(address);
    }
    if (phone) {
      await this.locators.phoneInput.fill(phone);
    }
    if (companyName) {
      await this.locators.companyNameInput.fill(companyName);
    }
    if (addressComplement) {
      await this.locators.addressComplementInput.fill(addressComplement);
    }
  }

  async addDeliveryComment(messageText: string) {
    await this.locators.deliveryMessageInput.fill(messageText);
  }

  async choosePaymentMethod(paymentMethod: 'bankWire' | 'check') {
    if (paymentMethod == 'bankWire') {
      await this.locators.payByBankWireRadio.click();
    } else {
      await this.locators.payByCheckRadio.click();
    }
  }

  async placeOrder() {
    await this.locators.agreeTermsOfService.click();
    await this.locators.placeOrderButton.click();
  }
}

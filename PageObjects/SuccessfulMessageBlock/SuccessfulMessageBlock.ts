import { expect } from '@playwright/test';
import type { Page } from 'playwright';
import { BasePage } from '../Base/BasePage.js';
import { SuccessfulMessageLocators } from './SuccessfulMessageBlockLocators.js';

export class SuccessfulMessage extends BasePage {
  locators: SuccessfulMessageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new SuccessfulMessageLocators(this.page.locator('body'));
  }

  async continueShoppingClick() {
    await this.locators.continueShoppingButton.click();
  }

  async proceedToCheckoutClick() {
    await this.locators.proceedToCheckoutButton.click();
  }

  async closeModalWindow() {
    await this.locators.closeButton.click();
    await expect(this.locators.modalBody).toBeHidden();
  }
}

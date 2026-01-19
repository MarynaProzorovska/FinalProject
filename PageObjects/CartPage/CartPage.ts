import type { Page } from '@playwright/test';
import { BasePage } from '../Base/BasePage.js';
import { CartPageLocators } from './CartPageLocators.js';

export class CartPage extends BasePage {
  locators: CartPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new CartPageLocators(this.page.locator('body'));
  }

  async increaseProductCount(productName: string, increaseNumber: number) {
    for (let i = 0; i < increaseNumber; i++) {
      await this.locators
        .getBaseCartItemLocator(productName)
        .locator('.bootstrap-touchspin-up')
        .click();
    }
  }

  async decreaseProductCount(productName: string, decreaseNumber: number) {
    for (let i = 0; i < decreaseNumber; i++) {
      await this.locators
        .getBaseCartItemLocator(productName)
        .locator('.bootstrap-touchspin-down')
        .click();
    }
  }

  async deleteProduct(productName: string) {
    await this.locators.getBaseCartItemLocator(productName).locator('.remove-from-cart').click();
  }
}

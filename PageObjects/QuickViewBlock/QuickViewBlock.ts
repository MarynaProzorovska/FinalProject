import type { Page } from 'playwright/test';
import { BasePage } from '../Base/BasePage.js';
import { QuickViewBlockLocators } from './QuickViewBlockLocators.js';

export class QuickViewBlock extends BasePage {
  locators: QuickViewBlockLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new QuickViewBlockLocators(this.page.locator('body'));
  }

  async addToCart(quantity?: string, option?: string) {
    if (quantity) {
      await this.locators.quantityField.fill(quantity);
    }

    if (option) {
      await this.locators.formControlSelector.selectOption(option);
    }

    await this.locators.addToCartButton.click();
  }
}

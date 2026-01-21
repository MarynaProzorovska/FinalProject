import { type Page } from '@playwright/test';
import { BasePage } from '../Base/BasePage.js';
import { ProductPageLocators } from './ProductPageLocators.js';

export class ProductPage extends BasePage {
  locators: ProductPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new ProductPageLocators(this.page.locator('body'));
  }

  async addToCart(option?: string, count?: string) {
    if (option) {
      await this.locators.formControlSelector.selectOption(option);
    }

    if (count) {
      await this.locators.quantityField.fill(count);
    }

    await this.locators.addToCartButton.click();
  }

  async increaseProductCount(increaseNumber: number) {
    await this.locators.upButton.click({ clickCount: increaseNumber });
  }

  async decreaseProductCount(decreaseNumber: number) {
    await this.locators.downButton.click({ clickCount: decreaseNumber });
  }

  async addToWishlist() {
    await this.locators.addToWishListButton.click();
  }
}

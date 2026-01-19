import type { Page } from '@playwright/test';
import { BasePage } from '../Base/BasePage.js';
import { ClothesPageLocators } from './ClothesPageLocators.js';

export class ClothesPage extends BasePage {
  locators: ClothesPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new ClothesPageLocators(page.locator('body'));
  }

  async addItemToWishlist(productName: string) {
    const card = this.locators.getBaseCardLocator(productName);

    await card.locator('.wishlist-button-add').click();
  }

  async clickQuickViewOfTheProduct(productName: string) {
    const productCard = this.locators.getBaseCardLocator(productName);
    await productCard.hover();
    await productCard.locator('.quick-view').click();
  }
}

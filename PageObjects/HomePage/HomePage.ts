import type { Page } from 'playwright';
import { BasePage } from '../Base/BasePage.js';
import { HomePageLocators } from './HomePageLocators.js';

export class HomePage extends BasePage {
  locators: HomePageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new HomePageLocators(page.locator('body'));
  }

  async addItemToWishlist(productName: string) {
    await this.locators
      .getBaseCardLocator(productName)
      .locator(this.locators.wishlistButton)
      .click();
  }

  async quickViewOfTheProduct(productName: string) {
    const productCard = this.locators.getBaseCardLocator(productName);
    await productCard.hover();
    await productCard.locator('.quick-view').click();
  }
}

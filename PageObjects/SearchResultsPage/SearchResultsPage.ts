import type { Page } from '@playwright/test';
import { BasePage } from '../Base/BasePage.js';
import { SearchResultsPageLocators } from './SearchResultsPageLocators.js';

export class SearchResultsPage extends BasePage {
  locators: SearchResultsPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new SearchResultsPageLocators(this.page.locator('body'));
  }

  async addItemToWishlist(productName: string) {
    await this.locators
      .getBaseCardLocator(productName)
      .locator(this.locators.wishlistButton)
      .click();
  }

  async clickQuickViewOfTheProduct(productName: string) {
    const productCard = this.locators.getBaseCardLocator(productName);
    await productCard.hover();
    await productCard.locator('.quick-view').click();
  }
}

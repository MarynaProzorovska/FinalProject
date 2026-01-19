import type { Locator } from '@playwright/test';
import { BaseLocator } from '../Base/BaseLocator.js';

export class SearchResultsPageLocators extends BaseLocator {
  readonly wishlistButton: Locator = this.baseLocator.getByRole('button', {
    name: 'favorite_border',
  });
  readonly quickView: Locator = this.baseLocator.locator('.quick-view');
  readonly errorNotification: Locator = this.baseLocator.locator('.modal-text', {
    hasText: 'You need to be logged in to save products in your wishlist.',
  });
  readonly addToCart: Locator = this.baseLocator.locator('.add-to-cart');
  readonly noMatchesMessage: Locator = this.baseLocator.locator('#product-search-no-matches');

  getBaseCardLocator(productName: string): Locator {
    return this.baseLocator.locator('.product-miniature').filter({ hasText: productName });
  }
}

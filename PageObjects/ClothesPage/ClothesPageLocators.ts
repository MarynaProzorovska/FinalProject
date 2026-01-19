import type { Locator } from '@playwright/test';
import { BaseLocator } from '../Base/BaseLocator.js';

export class ClothesPageLocators extends BaseLocator {
  readonly menCategory: Locator = this.baseLocator.getByRole('link', { name: 'Men', exact: true });
  readonly womenCategory: Locator = this.baseLocator.getByRole('link', { name: 'Women' });
  readonly wishlistButton: Locator = this.baseLocator.locator('.wishlist-button-add');

  // readonly wishlistButton: Locator = this.baseLocator.getByRole('button', {
  //   name: 'favorite_border',
  // });
  readonly quickView: Locator = this.baseLocator.locator('.quick-view');
  readonly errorNotification: Locator = this.baseLocator.locator('.modal-text', {
    hasText: 'You need to be logged in to save products in your wishlist.',
  });

  getBaseCardLocator(productName: string): Locator {
    return this.baseLocator.locator('.product-miniature').filter({ hasText: productName });
  }
}

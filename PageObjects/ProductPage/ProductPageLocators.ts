import type { Locator } from '@playwright/test';
import { BaseLocator } from '../Base/BaseLocator.js';

export class ProductPageLocators extends BaseLocator {
  readonly productTitle: Locator = this.baseLocator.locator('.h1');
  readonly formControlSelector: Locator = this.baseLocator.locator('.form-control-select');
  readonly addToCartButton: Locator = this.baseLocator.getByRole('button', {
    name: ' Add to cart ',
  });
  readonly productDescription: Locator = this.baseLocator.locator('#product-description-short');
  readonly quantityField: Locator = this.baseLocator.locator('#quantity_wanted');
  readonly upButton: Locator = this.baseLocator.locator('.bootstrap-touchspin-up');
  readonly downButton: Locator = this.baseLocator.locator('.bootstrap-touchspin-down');
  readonly addToWishListButton: Locator = this.baseLocator.locator('.wishlist-button-add ');
  readonly clothesTitle: Locator = this.baseLocator.locator('.h1', { hasText: 'Clothes' });
  readonly accessoriesTitle: Locator = this.baseLocator.locator('.h1', { hasText: 'Accessories' });
  readonly artTitle: Locator = this.baseLocator.locator('.h1', { hasText: 'Art' });
}

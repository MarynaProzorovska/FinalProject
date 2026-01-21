import type { Locator } from 'playwright';
import { BaseLocator } from '../Base/BaseLocator.js';

export class QuickViewBlockLocators extends BaseLocator {
  readonly modalContentBlock: Locator = this.baseLocator.locator('.modal-content');
  readonly addToCartButton: Locator = this.baseLocator.getByRole('button', {
    name: ' Add to cart ',
  });
  readonly formControlSelector: Locator = this.baseLocator.locator('.form-control-select');
  readonly productDescription: Locator = this.baseLocator.locator('#product-description-short');
  readonly quantityField: Locator = this.baseLocator.locator('#quantity_wanted');
  readonly upButton: Locator = this.baseLocator.locator('.bootstrap-touchspin-up');
  readonly downButton: Locator = this.baseLocator.locator('.bootstrap-touchspin-down');

  getItemsName(productName: string): Locator {
    return this.baseLocator.locator('.h1', { hasText: productName });
  }
}

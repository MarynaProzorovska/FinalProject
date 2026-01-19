import type { Locator } from '@playwright/test';
import { BaseLocator } from '../Base/BaseLocator.js';

export class CartPageLocators extends BaseLocator {
  readonly continueShoppingButton: Locator = this.baseLocator.getByLabel('Continue shopping ');
  readonly removeFromCartButton: Locator = this.baseLocator.locator('.remove-from-cart');
  readonly productPrice: Locator = this.baseLocator.locator('.product-price');
  readonly productQuantityInput: Locator = this.baseLocator.locator(
    "[name='product-quantity-spin']"
  );
  readonly upButton: Locator = this.baseLocator.locator('.bootstrap-touchspin-up');
  readonly downButton: Locator = this.baseLocator.locator('.bootstrap-touchspin-down');
  readonly proceedToCheckoutButton: Locator = this.baseLocator.getByLabel('Proceed to checkout');

  readonly productInfoLabel: Locator = this.baseLocator.locator('.product-line-info .label');
  readonly productInfoValue: Locator = this.baseLocator.locator('.product-line-info .value');
  readonly subtotalCount: Locator = this.baseLocator.locator('.js-subtotal');
  readonly subtotalPrice: Locator = this.baseLocator.locator('.cart-summary-line .value');

  getBaseCartItemLocator(productName: string): Locator {
    return this.baseLocator.locator('.product-line-grid').filter({ hasText: productName });
  }
}

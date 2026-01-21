import type { Locator } from '@playwright/test';
import { BaseLocator } from '../Base/BaseLocator.js';

export class SuccessfulMessageLocators extends BaseLocator {
  readonly successfullyAddedMessage: Locator = this.baseLocator.getByText(
    'Product successfully added to your shopping cart'
  );
  readonly closeButton: Locator = this.baseLocator.locator("[aria-label='Close']");
  readonly continueShoppingButton: Locator = this.baseLocator.getByRole('button', {
    name: 'Continue shopping',
  });
  readonly proceedToCheckoutButton: Locator = this.baseLocator.locator('.btn', {
    hasText: 'Proceed to checkout',
  });
  readonly productQuantity: Locator = this.baseLocator.locator('.product-quantity');
  readonly productPrice: Locator = this.baseLocator.locator('.product-price');
  readonly subtotalValue: Locator = this.baseLocator.locator('.subtotal');
  readonly modalBody: Locator = this.baseLocator.locator('.modal-body');
}

import type { Locator } from 'playwright';
import { BaseLocator } from '../Base/BaseLocator.js';

export class HeaderElementsLocators extends BaseLocator {
  readonly logoLocator: Locator = this.baseLocator.locator('.logo');
  readonly clothesButton: Locator = this.baseLocator.getByRole('link', { name: ' Clothes ' });
  readonly accessoriesButton: Locator = this.baseLocator.getByRole('link', {
    name: ' Accessories ',
  });
  readonly artButton: Locator = this.baseLocator.getByRole('link', { name: ' Art ' });
  readonly searchInput: Locator = this.baseLocator.locator("[placeholder='Search our catalog']");
  readonly cart: Locator = this.baseLocator.locator('.blockcart');
  readonly cartProductsCount: Locator = this.baseLocator.locator(
    '.cart-content .cart-products-count'
  );
}

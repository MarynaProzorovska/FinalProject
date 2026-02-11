import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures.js';

test.describe('Cart page functionality check', async function () {
  test(
    'Changing number of product with arrows',
    { tag: '@FinalProject10' },
    async function ({ headerElements, clothesPage, productPage, successfulMessage, cartPage }) {
      await test.step('Adding product to the cart', async () => {
        await headerElements.navigateToClothesPage();
        await clothesPage.locators.getBaseCardLocator('Hummingbird printed t-shirt').click();
        await expect(productPage.locators.productTitle).toBeVisible();
        await productPage.addToCart();
        await successfulMessage.proceedToCheckoutClick();
      });

      await test.step('Increasing number', async () => {
        await cartPage.increaseProductCount('Hummingbird printed t-shirt', 3);
        await expect(cartPage.locators.subtotalCount).toHaveText(' 4 items ');
      });

      await test.step('Decreasing number', async () => {
        await cartPage.decreaseProductCount('Hummingbird printed t-shirt', 2);
        await expect(cartPage.locators.subtotalCount).toHaveText(' 2 items ');
      });

      await test.step('Input new value', async () => {
        await cartPage.inputNewProductCount('5');
        await expect(cartPage.locators.subtotalCount).toHaveText(' 5 items ');
      });

      await test.step('Delete product', async () => {
        await cartPage.deleteProduct('Hummingbird printed t-shirt');
        await expect(cartPage.locators.noItemsMessage).toBeVisible();
      });
    }
  );
});

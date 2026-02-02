import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures.js';

test.beforeEach(async ({ headerElements, searchResultsPage }) => {
  await headerElements.searchByText('Hummingbird printed t-shirt');
  await searchResultsPage.locators.getBaseCardLocator('Hummingbird printed t-shirt').click();
});

test.describe('Product page functionality', async function () {
  test(
    'Adding to wishlist for not signed in user',
    { tag: '@FinalProject08' },
    async function ({ productPage }) {
      await productPage.addToWishlist();
      await expect(productPage.locators.notLoggedInMessage).toBeVisible();
    }
  );

  test(
    'Verifying adding to cart',
    { tag: '@FinalProject09' },
    async function ({ productPage, successfulMessage }) {
      await test.step('Adding to cart 2 items - M size - black color', async () => {
        await productPage.addToCart('M', '2');
        await expect(successfulMessage.locators.productQuantity).toHaveText('Quantity: 2');
        await expect(successfulMessage.locators.productSize).toHaveText('Size: M');
      });
    }
  );
});

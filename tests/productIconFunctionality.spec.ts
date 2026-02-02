import { expect } from 'playwright/test';
import { test } from '../fixtures/fixtures.js';

test.beforeEach(async ({ headerElements }) => {
  await headerElements.navigateToClothesPage();
});

test.describe('Product item functionality for non signed in user', async function () {
  test('Check add to wishlist', { tag: '@FinalProject05' }, async function ({ clothesPage }) {
    await clothesPage.addItemToWishlist('Hummingbird printed t-shirt');
    await expect(clothesPage.locators.errorNotification).toBeVisible();
  });

  test(
    'Check quick view, async function',
    { tag: '@FinalProject06' },
    async function ({ clothesPage, quickViewBlock }) {
      await clothesPage.clickQuickViewOfTheProduct('Hummingbird printed t-shirt');
      await expect(quickViewBlock.locators.productDescription).toBeVisible();
    }
  );

  test(
    'Check redirect to Product-item page',
    { tag: '@FinalProject07' },
    async function ({ clothesPage, productPage }) {
      const card = clothesPage.locators.getBaseCardLocator('Hummingbird printed t-shirt');
      await card.click();
      await expect(productPage.locators.productTitle).toHaveText('Hummingbird printed t-shirt');
    }
  );
});

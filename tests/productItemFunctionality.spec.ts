import { expect } from 'playwright/test';
import { test } from '../fixtures/fixtures.js';

test.beforeEach(async ({ headerElements }) => {
  await headerElements.navigateToClothesPage();
});

test.describe('Product item functionality for non signed in user', async function () {
  test('Check add to wishlist', async function ({ clothesPage }) {
    await clothesPage.addItemToWishlist('Hummingbird printed t-shirt');
    await expect(clothesPage.locators.errorNotification).toBeVisible();
  });

  test('Check quick view, async function', async function ({ clothesPage, quickViewBlock }) {
    await clothesPage.clickQuickViewOfTheProduct('Hummingbird printed t-shirt');
    await expect(quickViewBlock.locators.modalContentBlock).toBeVisible();
  });
});

import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures.js';

const existingProductNames = [
  { name: 'Hummingbird printed t-shirt' },
  { name: 'Hummingbird printed sweater' },
  { name: 'Mug The best is yet to come' },
  { name: 'Mug Today is a good day' },
  { name: 'Hummingbird cushion' },
  { name: 'Mountain fox - Vector graphics' },
  { name: 'Brown bear - Vector graphics' },
  { name: 'Mountain fox notebook' },
  { name: 'Hummingbird notebook' },
  { name: 'Hummingbird - Vector graphics' },
];

const notExistingProductNames = [
  { name: 'Office skirt' },
  { name: 'Blue jeans' },
  { name: 'Long dress' },
  { name: 'Nice socks' },
  { name: 'Pink cup' },
];

test.describe('Check search by product name and adding it to cart', async function () {
  for (const testData of existingProductNames) {
    test(
      `Positive case - ${testData.name}`,
      { tag: '"@FinalProject01' },
      async function ({ headerElements, searchResultsPage, quickViewBlock }) {
        await headerElements.searchByText(testData.name);
        await expect(searchResultsPage.locators.getBaseCardLocator(testData.name)).toBeVisible();
        await searchResultsPage.clickQuickViewOfTheProduct(testData.name);
        await quickViewBlock.addToCart();
        await expect(headerElements.locators.cartProductsCount).toHaveText(
          'There is 1 item in your cart.'
        );
      }
    );
  }

  for (const testData of notExistingProductNames) {
    test(
      `Negative case - ${testData.name}`,
      { tag: '@FinalProject02' },
      async function ({ headerElements, searchResultsPage }) {
        await headerElements.searchByText(testData.name);
        await expect(
          searchResultsPage.locators.getBaseCardLocator(testData.name)
        ).not.toBeVisible();
        await expect(searchResultsPage.locators.noMatchesMessage).toBeVisible();
      }
    );
  }
});

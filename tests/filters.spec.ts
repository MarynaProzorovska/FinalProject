import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures.js';

test.beforeEach(async ({ headerElements, productPage }) => {
  await headerElements.navigateToClothesPage();
  await expect(productPage.locators.clothesTitle).toBeVisible();
});

test.describe('Verify filters on different pages', () => {
  test('Filters on clothes page', { tag: '@FinalProject03' }, async function async({ filters }) {
    await test.step('Filter by Woman-Category', async function () {
      await filters.locators.womenCategoryCheckbox.check();
      await expect(filters.locators.activeFilterValue).toBeVisible();
      expect(filters.locators.activeFilterValue).toContainText('Categories: Women');
      await filters.verifyNumberOfCardsAfterFiltering();
      await filters.resetActiveFilter();
      await expect(filters.locators.activeFilterValue).toBeHidden();
    });

    await test.step('Filter by Man-Category', async function () {
      await filters.locators.menCategoryCheckbox.check();
      await expect(filters.locators.activeFilterValue).toBeVisible();
      expect(filters.locators.activeFilterValue).toContainText('Categories: Men');
      await filters.verifyNumberOfCardsAfterFiltering();
      await filters.resetActiveFilter();
      await expect(filters.locators.activeFilterValue).toBeHidden();
    });

    await test.step('Filter by S-Size', async function () {
      await filters.locators.sSizeCheckbox.check();
      await expect(filters.locators.activeFilterValue).toBeVisible();
      expect(filters.locators.activeFilterValue).toContainText('Size: S');
      await filters.verifyNumberOfCardsAfterFiltering();
      await filters.resetActiveFilter();
      await expect(filters.locators.activeFilterValue).toBeHidden();
    });

    await test.step('Filter by M-Size', async function () {
      await filters.locators.mSizeCheckbox.check();
      await expect(filters.locators.activeFilterValue).toBeVisible();
      expect(filters.locators.activeFilterValue).toContainText('Size: M');
      await filters.verifyNumberOfCardsAfterFiltering();
      await filters.resetActiveFilter();
      await expect(filters.locators.activeFilterValue).toBeHidden();
    });

    await test.step('Filter by L-Size', async function () {
      await filters.locators.lSizeCheckbox.check();
      await expect(filters.locators.activeFilterValue).toBeVisible();
      expect(filters.locators.activeFilterValue).toContainText('Size: L');
      await filters.verifyNumberOfCardsAfterFiltering();
      await filters.resetActiveFilter();
      await expect(filters.locators.activeFilterValue).toBeHidden();
    });

    await test.step('Filter by Long sleeves-Property', async function () {
      await filters.locators.longSleeveCheckbox.check();
      await expect(filters.locators.activeFilterValue).toBeVisible();
      expect(filters.locators.activeFilterValue).toContainText('Property: Long sleeves');
      await filters.verifyNumberOfCardsAfterFiltering();
      await filters.resetActiveFilter();
      await expect(filters.locators.activeFilterValue).toBeHidden();
    });

    await test.step('Filter by Short sleeves-Property', async function () {
      await filters.locators.shortSleeveCheckbox.check();
      await expect(filters.locators.activeFilterValue).toBeVisible();
      expect(filters.locators.activeFilterValue).toContainText('Property: Short sleeves');
      await filters.verifyNumberOfCardsAfterFiltering();
      await filters.resetActiveFilter();
      await expect(filters.locators.activeFilterValue).toBeHidden();
    });

    await test.step('Filter by White-Color', async function () {
      await filters.locators.whiteColorCheckbox.check();
      await expect(filters.locators.activeFilterValue).toBeVisible();
      expect(filters.locators.activeFilterValue).toContainText('Color: White');
      await filters.verifyNumberOfCardsAfterFiltering();
      await filters.resetActiveFilter();
      await expect(filters.locators.activeFilterValue).toBeHidden();
    });

    await test.step('Filter by White-Color', async function () {
      await filters.locators.blackColorCheckbox.check();
      await expect(filters.locators.activeFilterValue).toBeVisible();
      expect(filters.locators.activeFilterValue).toContainText('Color: Black');
      await filters.verifyNumberOfCardsAfterFiltering();
      await filters.resetActiveFilter();
      await expect(filters.locators.activeFilterValue).toBeHidden();
    });
  });

  test('Verify ClearAllFilters', { tag: '@FinalProject04' }, async function ({ filters }) {
    await test.step('Check some filters', async function () {
      await filters.locators.sSizeCheckbox.check();
      await filters.locators.mSizeCheckbox.check();
      await filters.locators.lSizeCheckbox.check();
    });

    await test.step('Reset all filters', async function () {
      await filters.locators.clearAll.click();
      await expect(filters.locators.sSizeCheckbox).not.toBeChecked();
      await expect(filters.locators.mSizeCheckbox).not.toBeChecked();
      await expect(filters.locators.lSizeCheckbox).not.toBeChecked();
    });
  });
});

import type { Locator } from 'playwright';
import { BaseLocator } from '../Base/BaseLocator.js';

export class FiltersLocators extends BaseLocator {
  readonly cardItem: Locator = this.baseLocator.locator('.product-miniature');

  readonly clearAll: Locator = this.baseLocator.getByRole('button', {
    name: ' Clear all ',
  });
  readonly activeFiltersBlock: Locator = this.baseLocator.locator('#js-active-search-filters');
  readonly activeFilterValue: Locator = this.baseLocator.locator('.filter-block');
  readonly closeActiveFilter: Locator = this.baseLocator.locator('[class="material-icons close"]');
  readonly totalProductCount: Locator = this.baseLocator.locator('.total-products');

  readonly minPriceSlider: Locator = this.baseLocator.locator('.ui-slider-handle').nth(0);
  readonly maxPriceSlider: Locator = this.baseLocator.locator('.ui-slider-handle').nth(1);
  readonly currentPricesValues: Locator = this.baseLocator.locator(
    "//p[starts-with(@id,'facet_label_')]"
  );

  readonly inStockCheckbox: Locator = this.baseLocator.getByRole('checkbox', {
    name: ' In stock ',
  });
  readonly discountedCheckbox: Locator = this.baseLocator.getByRole('checkbox', {
    name: ' Discounted ',
  });
  readonly menCategoryCheckbox: Locator = this.baseLocator.getByRole('checkbox', {
    name: 'Men (1)',
    exact: true,
  });
  readonly womenCategoryCheckbox: Locator = this.baseLocator.getByRole('checkbox', {
    name: ' Women ',
  });
  readonly sSizeCheckbox: Locator = this.baseLocator.getByRole('checkbox', {
    name: ' S (2)',
    exact: true,
  });
  readonly mSizeCheckbox: Locator = this.baseLocator.getByRole('checkbox', {
    name: ' M (2)',
    exact: true,
  });
  readonly lSizeCheckbox: Locator = this.baseLocator.getByRole('checkbox', {
    name: ' L (2)',
    exact: true,
  });
  readonly xlSizeCheckbox: Locator = this.baseLocator.getByRole('checkbox', {
    name: ' XL (2)',
    exact: true,
  });
  readonly whiteColorCheckbox: Locator = this.baseLocator.getByRole('checkbox', {
    name: ' White ',
  });
  readonly blackColorCheckbox: Locator = this.baseLocator.getByRole('checkbox', {
    name: ' Black ',
  });
  readonly longSleeveCheckbox: Locator = this.baseLocator.getByRole('checkbox', {
    name: ' Long sleeves ',
  });
  readonly shortSleeveCheckbox: Locator = this.baseLocator.getByRole('checkbox', {
    name: ' Short sleeves ',
  });
}

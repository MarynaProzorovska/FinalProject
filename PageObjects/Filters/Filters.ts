import { expect, type Page } from 'playwright/test';
import { BasePage } from '../Base/BasePage.js';
import { FiltersLocators } from './FiltersLocators.js';

export class Filters extends BasePage {
  locators: FiltersLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new FiltersLocators(this.page.locator('body'));
  }

  async resetAllFilters() {
    await this.locators.clearAll.click();
  }

  async resetActiveFilter() {
    await this.locators.closeActiveFilter.click();
  }

  async verifyNumberOfCardsAfterFiltering() {
    const cardsCount = await this.locators.cardItem.count();
    const realText = await this.locators.totalProductCount.innerText();

    const expectedText = new RegExp(`There (is|are) ${cardsCount} product(s)?`);

    expect(realText).toMatch(expectedText);
  }
}

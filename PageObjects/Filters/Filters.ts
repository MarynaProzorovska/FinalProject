import { expect, type Page } from 'playwright/test';
import { BasePage } from '../Base/BasePage.js';
import { FiltersLocators } from './FiltersLocators.js';

export class Filters extends BasePage {
  locators: FiltersLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new FiltersLocators(this.page.locator('body'));
  }

  responseObject = {
    products: [
      {
        id_product: 1,
        comments_nb: '0',
        average_grade: null,
      },
      {
        id_product: 2,
        comments_nb: '0',
        average_grade: null,
      },
    ],
  };

  async resetAllFilters() {
    await this.locators.clearAll.click();
  }

  async resetActiveFilter() {
    await this.locators.closeActiveFilter.click();
  }

  async verifyNumberOfCardsAfterFilteringUI() {
    const cardsCount = await this.locators.cardItem.count();
    const realText = await this.locators.totalProductCount.innerText();

    const expectedText = new RegExp(`There (is|are) ${cardsCount} product(s)?`);

    expect(realText).toMatch(expectedText);
  }

  async verifyNumberOfCardsAfterResetFiltersNetwork() {
    const promise = this.page.waitForResponse(
      '**CommentGrade&id_products%5B%5D=1&id_products%5B%5D=2'
    );
    await this.resetAllFilters();
    const response = await promise;

    expect(response.status()).toBe(200);
    expect(await response.json()).toMatchObject(this.responseObject);
  }
}

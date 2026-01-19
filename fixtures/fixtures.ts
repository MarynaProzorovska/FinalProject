import { test as base } from '@playwright/test';
import { CartPage } from '../PageObjects/CartPage/CartPage.js';
import { ClothesPage } from '../PageObjects/ClothesPage/ClothesPage.js';
import { Filters } from '../PageObjects/Filters/Filters.js';
import { HeaderElements } from '../PageObjects/HeaderElements/HeaderElements.js';
import { HomePage } from '../PageObjects/HomePage/HomePage.js';
import { ProductPage } from '../PageObjects/ProductPage/ProductPage.js';
import { QuickViewBlock } from '../PageObjects/QuickViewBlock/QuickViewBlock.js';
import { SearchResultsPage } from '../PageObjects/SearchResultsPage/SearchResultsPage.js';
import { SuccessfulMessage } from '../PageObjects/SuccessfulMessageBlock/SuccessfulMessageBlock.js';

type MyFixtures = {
  headerElements: HeaderElements;
  homePage: HomePage;
  quickViewBlock: QuickViewBlock;
  searchResultsPage: SearchResultsPage;
  productPage: ProductPage;
  successfulMessage: SuccessfulMessage;
  cartPage: CartPage;
  filters: Filters;
  clothesPage: ClothesPage;
  before: void;
};

export const test = base.extend<MyFixtures>({
  headerElements: async ({ page }, use) => {
    const headerElements = new HeaderElements(page);
    await use(headerElements);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  quickViewBlock: async ({ page }, use) => {
    const quickViewBlock = new QuickViewBlock(page);
    await use(quickViewBlock);
  },

  searchResultsPage: async ({ page }, use) => {
    const searchResultsPage = new SearchResultsPage(page);
    await use(searchResultsPage);
  },

  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await use(productPage);
  },

  successfulMessage: async ({ page }, use) => {
    const successfulMessage = new SuccessfulMessage(page);
    await use(successfulMessage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },

  filters: async ({ page }, use) => {
    const filters = new Filters(page);
    await use(filters);
  },

  clothesPage: async ({ page }, use) => {
    const clothesPage = new ClothesPage(page);
    await use(clothesPage);
  },

  before: [
    async ({ page }, use) => {
      await page.goto('/');

      await use();
    },
    { auto: true },
  ],
});

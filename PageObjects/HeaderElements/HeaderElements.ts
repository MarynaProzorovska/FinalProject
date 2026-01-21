import type { Page } from 'playwright/test';
import { BasePage } from '../Base/BasePage.js';
import { HeaderElementsLocators } from './HeaderElementsLocators.js';

export class HeaderElements extends BasePage {
  locators: HeaderElementsLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new HeaderElementsLocators(page.locator('body'));
  }

  async navigateToHomePage() {
    await this.locators.logoLocator.click();
  }

  async navigateToClothesPage() {
    await this.locators.clothesButton.click();
  }

  async navigateToAccessoriesPage() {
    await this.locators.accessoriesButton.click();
  }

  async navigateToArtPage() {
    await this.locators.artButton.click();
  }

  async searchByText(searchText: string) {
    await this.locators.searchInput.fill(searchText);
    await this.page.keyboard.press('Enter');
  }
}

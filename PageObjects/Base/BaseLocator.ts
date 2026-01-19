import type { Locator } from 'playwright/test';

export class BaseLocator {
  baseLocator: Locator;

  constructor(baseLocator: Locator) {
    this.baseLocator = baseLocator;
  }
}

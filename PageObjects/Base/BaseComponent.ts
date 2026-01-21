import type { Locator } from 'playwright';

export class BaseComponent {
  protected baseLocator: Locator;

  constructor(baseLocator: Locator) {
    this.baseLocator = baseLocator;
  }
}

import { expect, type Locator, type Page } from '@playwright/test';

export class BasketPage {
  readonly page: Page;
  readonly title: Locator;
  readonly removeButton: Locator;
  //readonly iconCart: Locator;

  
  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
  }

  async deleteProduct() {
    await this.removeButton.click();
  }

}
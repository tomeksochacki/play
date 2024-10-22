import { expect, type Locator, type Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly title: Locator;
  readonly addButton: Locator;
  readonly iconCart: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.addButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.iconCart = page.locator('[data-test="shopping-cart-link"]');
  }

  async chooceProduct() {
    await this.addButton.click();
  }

  async goToBasket() {
    await this.iconCart.click();
  }
}
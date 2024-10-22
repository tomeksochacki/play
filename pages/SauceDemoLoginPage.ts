import { expect, type Locator, type Page } from '@playwright/test';

export class SauceDemoLoginPage {
  readonly page: Page;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('[data-test="username"]');
    this.passwordField = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]'); 
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login() {
    await this.usernameField.fill('standard_user');
    await this.passwordField.fill('secret_sauce');
    await this.loginButton.click();
  }
}
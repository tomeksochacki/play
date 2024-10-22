import { test, expect } from '@playwright/test';
import { BasketPage } from '../pages/BasketPage';
import { SauceDemoLoginPage } from '../pages/SauceDemoLoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('Correctly placing an order for product. And removing product from cart ', async ({ page }) => {
  const basket = new BasketPage(page);
  const sauceLogin = new SauceDemoLoginPage(page);
  const products = new ProductsPage(page);

  await sauceLogin.goto();
  await sauceLogin.login();
  await expect.soft(page.locator('[data-test="title"]')).toHaveText('Products');
  await products.chooceProduct();
  await products.goToBasket();
  await expect.soft(page.locator('[data-test="title"]')).toHaveText('Your Cart');
  await expect.soft(page.locator('[data-test="item-quantity"]')).toHaveText('1');
  await basket.deleteProduct();
  await expect.soft(page.locator('[data-test="shopping-cart-link"]')).toHaveText('');

});


import { test, expect } from '@playwright/test';
import { setup, teardown, login, getPage } from './config';

test.beforeAll(async () => {
    await setup();
});

test.afterAll(async () => {
    await teardown();
});

test('Amazon Product Search and Add to Cart', async ({}) => {
    const page = getPage();

    // Login
    const loggedIn = await login('your_email@example.com', 'your_password');
    expect(loggedIn).toBe(true);

    // Perform search
    await page.goto('https://www.amazon.in');
    await page.fill('#twotabsearchtextbox', 'laptop');
    await page.click('#nav-search-submit-button');

    // Click on the first product in search results
    await page.click('.s-result-item:first-child h2 a');
    await page.waitForNavigation();

    // Validate product details (example: verify title)
    const productTitle = await page.innerText('#productTitle');
    expect(productTitle).toContain('laptop');

    // Add product to cart
    await page.click('#add-to-cart-button');
    await page.waitForSelector('#hlb-view-cart-announce');

    // Verify product added to cart
    const cartCount = await page.innerText('#nav-cart-count');
    expect(cartCount).toBe('1');
});

import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;
let loggedIn = false;

export async function setup(): Promise<void> {
    browser = await chromium.launch();
    page = await browser.newPage();
}

export async function login(username: string, password: string): Promise<boolean> {
    if (!page) {
        throw new Error('Page is not initialized. Call setup() first.');
    }

    await page.goto('https://www.amazon.in');
    await page.click('#nav-signin-tooltip > a');
    await page.locator('[type="email"]').fill(username);
    await page.click('#continue');
    await page.locator('[type="password"]').fill(password);
    await page.click('#signInSubmit');

    // Check if login was successful
    try {
        await page.waitForSelector('#nav-link-accountList-nav-line-1', { timeout: 5000 });
        loggedIn = true;
    } catch (error) {
        loggedIn = false;
        console.error('Login failed:', error);
    }

    return loggedIn;
}

export function getPage(): Page {
    if (!page) {
        throw new Error('Page is not initialized. Call setup() first.');
    }
    return page;
}

export async function teardown(): Promise<void> {
    if (browser) {
        await browser.close();
    }
}

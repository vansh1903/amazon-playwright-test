import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    // Configure the browser to be used for tests
    browserName: 'chromium'
    // Adjust other browser settings as needed
  },
};

export default config;

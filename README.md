# Amazon Playwright Tests

This project automates several workflows on the Amazon website using Playwright with TypeScript. The following workflows are automated:

1. Login
2. Search
3. Applying Filters
4. Product Details page

## Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)

## Setup

1. Install dependencies:
    ```sh
    npm install
    ```

2. Configure environment variables:
    - Create a `.env` file in the root of your project and add your Amazon credentials:
      ```env
      AMAZON_EMAIL=your-email@example.com
      AMAZON_PASSWORD=your-password
      ```

## Running Tests

To run the tests, use the following command:
```sh
npx playwright test

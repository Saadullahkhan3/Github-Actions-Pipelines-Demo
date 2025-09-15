# Frontend Demo

A simple React application for GitHub Actions CI/CD demonstration.

## Features

-   ✅ React 18 with modern setup
-   ✅ ESLint for code quality and linting
-   ✅ Jest and React Testing Library for testing
-   ✅ Webpack for building and development server
-   ✅ Babel for JavaScript transpilation

## Available Scripts

### `npm install`

Install all dependencies

### `npm run dev`

Runs the app in development mode with hot reload on port 3000

### `npm run build`

Builds the app for production in the `dist` folder

### `npm test`

Runs the test suite using Jest

### `npm run lint`

Runs ESLint to check code quality and style

### `npm run lint:fix`

Runs ESLint with automatic fixing of issues

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.js
│   └── setupTests.js
├── package.json
├── webpack.config.js
├── babel.config.json
├── jest.config.json
└── .eslintrc.json
```

## Ready for CI/CD

This project is configured to work with GitHub Actions and includes:

-   Automated linting
-   Test execution
-   Production builds
-   All necessary configuration files

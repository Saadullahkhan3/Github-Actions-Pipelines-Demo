# Express API Demo

A simple Express.js API with 2 endpoints, tests, and linting configuration for GitHub Actions demo.

## API Endpoints

### 1. GET /

Root endpoint that returns welcome message and API information.

**Response:**

```json
{
    "message": "Welcome to the Express API Demo",
    "version": "1.0.0",
    "endpoints": ["GET / - This endpoint", "GET /health - Health check"],
    "timestamp": "2025-09-09T22:03:00.000Z"
}
```

### 2. GET /health

Health check endpoint that returns server status.

**Response:**

```json
{
    "status": "OK",
    "message": "Server is running",
    "timestamp": "2025-09-09T22:03:00.000Z"
}
```

## Available Scripts

-   `npm start` - Start the server
-   `npm test` - Run tests with Jest
-   `npm run test:watch` - Run tests in watch mode
-   `npm run lint` - Run ESLint
-   `npm run lint:fix` - Fix ESLint issues automatically

## Running the Application

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the server:

    ```bash
    npm start
    ```

3. The server will run on `http://localhost:3000`

## Testing

Run all tests:

```bash
npm test
```

## Linting

Check code quality:

```bash
npm run lint
```

Auto-fix linting issues:

```bash
npm run lint:fix
```

## GitHub Actions

The project includes a GitHub Actions workflow that:

-   Runs ESLint on code push
-   Executes all tests
-   Works with Node.js 18

The workflow file is located at `.github/workflows/test-lint.yml`

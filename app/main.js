const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint 1: GET / - Root endpoint
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Express API Demo',
        version: '1.0.0',
        endpoints: [
            'GET / - This endpoint',
            'GET /health - Health check'
        ],
        timestamp: new Date().toISOString()
    });
});

// Endpoint 2: GET /health - Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

// Start server only if not in test environment
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;

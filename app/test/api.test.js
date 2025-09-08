const request = require('supertest');
const app = require('../main.js');

describe('API Endpoints', () => {
    // Test for GET / (root) endpoint
    describe('GET /', () => {
        test('should return welcome message and API info', async () => {
            const response = await request(app)
                .get('/')
                .expect(200);

            expect(response.body).toHaveProperty('message', 'Welcome to the Express API Demo');
            expect(response.body).toHaveProperty('version', '1.0.0');
            expect(response.body).toHaveProperty('endpoints');
            expect(response.body).toHaveProperty('timestamp');
            expect(Array.isArray(response.body.endpoints)).toBe(true);
        });

        test('should list available endpoints', async () => {
            const response = await request(app)
                .get('/')
                .expect(200);

            expect(response.body.endpoints).toContain('GET / - This endpoint');
            expect(response.body.endpoints).toContain('GET /health - Health check');
        });
    });

    // Test for GET /health endpoint
    describe('GET /health', () => {
        test('should return health status', async () => {
            const response = await request(app)
                .get('/health')
                .expect(200);

            expect(response.body).toHaveProperty('status', 'OK');
            expect(response.body).toHaveProperty('message', 'Server is running');
            expect(response.body).toHaveProperty('timestamp');
        });
    });
});

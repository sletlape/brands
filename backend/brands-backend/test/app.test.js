const request = require('supertest');
const app = require('../app/app');
// const mongoose = require('mongoose');

describe('Brands API', () => {
    // afterAll(async () => {
    //     await mongoose.disconnect();
    //     await app.close();
    // });
    describe('GET /brands', () => {
        it('GET /brands should return 200', async () => {
            const response = await request(app).get('/brands');
            expect(response.statusCode).toBe(200);
        });

        it('GET /brands should return an array of JSON objects', async () => {
            const response = await request(app).get('/brands');
            expect(response.statusCode).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length > 0).toBe(true);
        });

        it('GET /brands/id should return 200 and a single JSON object with id of 1', async () => {
            const brandId = '1';
            const response = await request(app).get(`/brands/${brandId}`);
            expect(response.statusCode).toBe(200);
            expect(response.body).toBeDefined();
            expect(response.body._id).toBe(brandId);
        });

        it('GET /brands/id should return 404 if the id does not exist', async () => {
            const response = await request(app).get('/brands/10b0');
            expect(response.statusCode).toBe(404);
        });

        it('GET /brands/brandname/brandname should return status 200 with a JSON object containing a brandName, BMW', async () => {
            const brandName = 'BMW';
            const response = await request(app).get(`/brands/brandname/${brandName}`);
            expect(response.statusCode).toBe(200);
            expect(response.body).toBeDefined();
            expect(response.body.brandName).toBe(brandName);
        });

        it('GET /brands/brandname/brandname should return 404 if the brandName does not exist', async () => {
            const response = await request(app).get('/brands/brandname/fakeBrandName');
            expect(response.statusCode).toBe(404);
        });
    });

    describe('POST /brands', () => {
        it('POST /brands should return 201 and a JSON object with the new brand', async () => {
            const newBrand = {
                brandName: 'Volvo',
                logoUrl: './images/volvo.png',
            };
            const response = await request(app).post('/brands').send(newBrand);
            expect(response.statusCode).toBe(201);
            expect(response.body).toBeDefined();
            // console.log(response);
            expect(response.body.brandName).toBe(newBrand.brandName);
        });

        it('POST /brands should return 400 if the brandName is not provided', async () => {
            const newBrand = {
                logoUrl: './images/nothing.png',
            };
            const response = await request(app).post('/brands').send(newBrand);
            expect(response.statusCode).toBe(400);
        });

        it('POST /brands should return 404 if the wrong endpoint is used', async () => {
            const newBrand = {
                brandName: 'Wrong',
                logoUrl: './images/wrong.png',
            };
            const response = await request(app).post('/brand').send(newBrand);
            expect(response.statusCode).toBe(404);
        });

        it('POST /brands should return 400 if the brandName already exists', async () => {
            const newBrand = {
                brandName: 'BMW',
                logoUrl: './images/bmw.png',
            };
            const response = await request(app).post('/brands').send(newBrand);
            expect(response.statusCode).toBe(400);
        });
    });
});

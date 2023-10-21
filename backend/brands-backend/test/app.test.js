const request = require('supertest');
const app = require('../app/app');

describe('Brands API', () => {
    describe('GET /brands', () => {
        it('GET /brands should return 200', async () => {
            const response = await request(app).get('/brands');
            expect(response.statusCode).toBe(200);
        });

        it('GET /brands should return an array of JSON objects', async () => {
            const response = await request(app).get('/brands');
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        _id: expect.any(String),
                        brandName: expect.any(String),
                        logoURL: expect.any(String),
                        published: expect.any(String)
                    })
                ])
            );
        });

        it('GET /brands/id should return 200 and a single JSON object with id of 1', async () => {
            const brandId = '1';
            const response = await request(app).get(`/brands/${brandId}`);

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(
                expect.objectContaining({
                    _id: brandId,
                    brandName: expect.any(String),
                    logoURL: expect.any(String),
                    published: expect.any(String)
                })
            );
        });

        it('GET /brands/id should return 404 if the id does not exist', async () => {
            const response = await request(app).get('/brands/10b0');
            expect(response.statusCode).toBe(404);
        });

        it('GET /brands/brandname/brandname should return status200 with a JSON object containing a brandName, BMW', async () => {
            const brandName = 'BMW';
            const response = await request(app).get(`/brands/brandname/${brandName}`);

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(
                expect.objectContaining({
                    brandName: brandName,
                    logoURL: expect.any(String),
                    published: expect.any(String)
                })
            );
        });

        it('GET /brands/brandname/brandname should should return 404 if the brandName does not exist', async () => {
            const response = await request(app).get('/brands/brandname/fakeBrandName');
            expect(response.statusCode).toBe(404);
        });
    });

    describe('POST /brands', () => {
        it('POST /brands should return 201 and a JSON object with the new brand', async () => {
            const newBrand = {
                brandName: 'Volvo',
                logoURL: './images/volvo.png',
            };
            const response = await request(app).post('/brands').send(newBrand);
            expect(response.statusCode).toBe(201);
            console.log(response);
            expect(response.body).toEqual(
                expect.objectContaining({
                    _id: expect.any(String),
                    brandName: newBrand.brandName,
                    logoURL: newBrand.logoURL,
                    published: expect.any(String)
                })
            );
        });

        it('POST /brands should return 400 if the brandName is not provided', async () => {
            const newBrand = {
                logoURL: './images/nothing.png',
            };
            const response = await request(app).post('/brands').send(newBrand);
            expect(response.statusCode).toBe(400);
        });

        // it post return error if wrong endpoint is used
        it('POST /brands should return 404 if the wrong endpoint is used', async () => {
            const newBrand = {
                brandName: 'Wrong',
                logoURL: './images/wrong.png',
            };
            const response = await request(app).post('/brand').send(newBrand);
            expect(response.statusCode).toBe(404);
        });

        it('POST /brands should return error 400 if the brandName already exists', async () => {
            const newBrand = {
                brandName: 'BMW',
                logoURL: './images/bmw.png',
            };
            const response = await request(app).post('/brands').send(newBrand);
            expect(response.statusCode).toBe(400);
        });
        
    })
});
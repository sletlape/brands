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

    // describe('POST /brands', () => { });

});
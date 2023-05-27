const request = require('supertest');
const app = require('./app');

describe('Products', () => {
  it('should return the correct products from the database', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      [
        {
          id: 1,
          name: 'Camo Onesie',
          slogan: 'Blend in to your crowd',
          description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
          category: 'Jackets',
          default_price: '140',
        },
      ],
    );
  });

  it('should return the correct product from the database when given an id', async () => {
    const response = await request(app).get('/products/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      [
        {
          id: 1,
          name: 'Camo Onesie',
          slogan: 'Blend in to your crowd',
          description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
          category: 'Jackets',
          default_price: '140',
          features: [
            {
              feature: 'Fabric',
              value: 'Canvas',
            },
            {
              feature: 'Buttons',
              value: 'Brass',
            },
          ],
        },
      ],
    );
  });

  it('should return the correct styles for a product when given an id', async () => {
    const response = await request(app).get('/products/1/styles');
    expect(response.status).toBe(200);
    expect(response.body.results[0].name).toEqual('Forest Green & Black');
  });

  it('should return the related products for a product with specified id', async () => {
    const response = await request(app).get('/products/1/related');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      [
        2,
        3,
        8,
        7,
      ],
    );
  });
});

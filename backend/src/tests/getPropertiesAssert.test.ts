import chaiHttp from 'chai-http';
import chai, { assert } from 'chai';
import db from '../config/database';
import initializeServer from '../config/server';

db();
chai.use(chaiHttp);
const url = 'http://localhost:3001';

describe('Get properties: ', () => {
    let server;
    jest.setTimeout(8000);

    beforeAll(async () => {
        server = await initializeServer();
    });

    afterAll(() => {
        server.close();
    });

    it('Check result type', async () => {
        const result = await chai.request(url).get('/api/properties');
        assert.typeOf(result.body.properties, 'array');
    });
    it('Check result length (limit 10)', async () => {
        const result = await chai
            .request(url)
            .get('/api/properties')
            .query({ limit: 10 });
        assert.isAtMost(result.body.properties.length, 10);
    });
    it('Check result attributes', async () => {
        const result = await chai
            .request(url)
            .get('/api/properties')
            .query({ attributes: { city: 'San Francisco' } });
        result.body.properties.map((property) => {
            assert.equal(property.city, 'San Francisco');
        });
    });
    it('Check result measurements', async () => {
        const result = await chai
            .request(url)
            .get('/api/properties')
            .query({ measurements: { price: { $gt: 1000, $lt: 50000 } } });
        result.body.properties.map((property) => {
            assert.isAbove(property.price, 1000);
            assert.isBelow(property.price, 50000);
        });
    });
});

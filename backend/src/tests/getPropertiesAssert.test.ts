import chaiHttp from 'chai-http';
import chai, { assert } from 'chai';
import db from '../config/database';

db();
chai.use(chaiHttp);
const url = 'http://localhost:3001';

describe('Get properties: ', () => {
    it('Check result type', async () => {
        const result = await chai.request(url).get('/api/properties');
        assert.typeOf(result.body.properties, 'array');
    }).timeout(5000);
    it('Check result length (limit 10)', async () => {
        const result = await chai
            .request(url)
            .get('/api/properties')
            .query({ limit: 10 });
        assert.isAtMost(result.body.properties.length, 10);
    }).timeout(5000);
    it('Check result attributes', async () => {
        const result = await chai
            .request(url)
            .get('/api/properties')
            .query({ attributes: { city: 'San Francisco' } });
        result.body.properties.map((property) => {
            assert.equal(property.city, 'San Francisco');
        });
    }).timeout(5000);
    it('Check result measurements', async () => {
        const result = await chai
            .request(url)
            .get('/api/properties')
            .query({ measurements: { price: { $gt: 1000, $lt: 50000 } } });
        result.body.properties.map((property) => {
            assert.isAbove(property.price, 1000);
            assert.isBelow(property.price, 50000);
        });
    }).timeout(5000);
});

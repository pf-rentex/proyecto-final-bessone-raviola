import chaiHttp from 'chai-http';
import chai, { assert } from 'chai';
import prepare from 'mocha-prepare';
import { describe, it } from 'mocha';

import prepareEnvironment from './prepare';

chai.use(chaiHttp);
const url = 'http://localhost:3001';

let app;

describe('Get properties: ', () => {
    prepare(async (done) => {
        app = await prepareEnvironment();
        done();
    });

    after(() => {
        process.exit(0);
    });

    it('Check result type', async () => {
        const result = await chai.request(app).get('/api/properties');
        console.log({ result });
        // assert.typeOf(result.body.properties, 'array');
    });
    // it('Check result length (limit 10)', async () => {
    //     const result = await chai
    //         .request(app)
    //         .get('/api/properties')
    //         .query({ limit: 10 });
    //     assert.isAtMost(result.body.properties.length, 10);
    // });
    // it('Check result attributes', async () => {
    //     const result = await chai
    //         .request(app)
    //         .get('/api/properties')
    //         .query({ attributes: { city: 'San Francisco' } });
    //     result.body.properties.map((property) => {
    //         assert.equal(property.city, 'San Francisco');
    //     });
    // });
    // it('Check result measurements', async () => {
    //     const result = await chai
    //         .request(app)
    //         .get('/api/properties')
    //         .query({ measurements: { price: { $gt: 1000, $lt: 50000 } } });
    //     result.body.properties.map((property) => {
    //         assert.isAbove(property.price, 1000);
    //         assert.isBelow(property.price, 50000);
    //     });
    // });
});

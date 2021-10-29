/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import { assert } from 'chai';
import db from '../config/database';

db();
chai.use(chaiHttp);
const url = 'http://localhost:5000';

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
});

/* eslint-disable no-undef */
import { assert } from 'chai';
import AfipService from '../services/afip/index';

describe('Afip service test: ', () => {
    it('Check valid CUIT', async () => {
        const afip = new AfipService();
        const result = await afip.checkContributor(20023926815);
        assert.equal(result.isValid, true);
    });
    it('Check invalid CUIT', async () => {
        const afip = new AfipService();
        const result = await afip.checkContributor(23366804889);
        assert.equal(result.isValid, false);
    });
});

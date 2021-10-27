/* eslint-disable no-undef */
import { doesNotMatch } from 'assert';
import { assert } from 'chai';
import { getProperties } from '../controllers/properties';

describe('Get properties endpoint test: ', () => {
    it('Check result type', async (done) => {
        const result = await getProperties(
            { query: { attributes: { city: 'Córdoba' } } },
            null,
        );
        assert.typeOf(result, Array);
    });
    // it('Check invalid CUIT', async () => {
    //     const afip = new AfipService();
    //     const result = await afip.checkContributor(23366804889);
    //     assert.equal(result.isValid, false);
    // });
});

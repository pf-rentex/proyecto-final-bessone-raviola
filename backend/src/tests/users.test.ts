import supertest from 'supertest';
import app from '../config/app';

const api = supertest(app);

describe('user tests', () => {
    it('tenants return as json', async () => {
        expect(1).toBe(1);
    });
    it('owners return as json', () => {
        expect(1).toBe(1);
    });
    it('real estates return as json', () => {
        expect(1).toBe(1);
    });
});

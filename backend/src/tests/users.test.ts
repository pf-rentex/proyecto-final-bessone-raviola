import supertest from 'supertest';
import initializeServer from "../config/server";

const {app, server} = initializeServer();

const api = supertest(app);

describe('test', () => {

  it('empty request fails', async () => {
    await api.post('/api/users')
        .expect(400)
        .expect('Content-Type', /application\/json/);
  });

  after(() => {
    server.close();
  });
});
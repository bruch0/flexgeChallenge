import supertest from 'supertest';
import faker from 'faker';

import 'setup';
import app from 'app';

const sut = supertest(app);

describe('POST /login', () => {
  const invalidBody = {
    email: faker.internet.email(),
    password: faker.internet.password(),
  };

  it('Should return status 400 when sending invalid body', async () => {
    const result = await sut.post('/login').send({});

    expect(result.status).toEqual(400);
  });

  it('Should return status 400 when sending invalid body', async () => {
    const result = await sut.post('/login').send({ ...invalidBody, password: undefined });

    expect(result.status).toEqual(400);
  });

  it('Should return status 401 when sending a not flexge email', async () => {
    const result = await sut.post('/login').send(invalidBody);

    expect(result.status).toEqual(401);
  });

  it('Should return status 200 when sending a flexge email, but wrong password', async () => {
    const result = await sut.post('/login').send({ email: 'random@flexge.com', password: 'wrongPassword' });

    expect(result.status).toEqual(401);
  });

  it('Should return status 200 when sending a flexge email, but wrong password', async () => {
    const result = await sut.post('/login').send({ email: 'random@flexge.com', password: 'Senha123!' });

    expect(result.status).toEqual(200);
    expect(result.body.token).toBeDefined();
  });
});

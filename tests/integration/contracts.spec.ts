import supertest from 'supertest';
import faker from 'faker';

import 'setup';
import app from 'app';
import { connectDatabase, disconnectDatabase } from 'db/index';
import { getAuthString } from '../utils/authString';

const sut = supertest(app);

describe('GET /contracts', () => {
  beforeAll(async () => {
    await connectDatabase();
  });

  afterAll(async () => {
    await disconnectDatabase();
  });

  it('Should return status 401 when token is not sent on the bearer', async () => {
    const result = await sut.get('/contracts');

    expect(result.status).toEqual(401);
  });

  it('Should return status 403 when skip is not defined on the query', async () => {
    const token = getAuthString();
    const result = await sut.get('/contracts').set('authorization', `Bearer ${token}`);

    expect(result.status).toEqual(403);
  });

  it('Should return status 200 when sending token and defining skip', async () => {
    const token = getAuthString();
    const result = await sut.get('/contracts?skip=20').set('authorization', `Bearer ${token}`);

    expect(result.status).toEqual(200);
  });
});

describe('POST /contracts', () => {
  beforeAll(async () => {
    await connectDatabase();
  });

  afterAll(async () => {
    await disconnectDatabase();
  });

  it('Should return status 401 when token is not sent on the bearer', async () => {
    const result = await sut.post('/contracts');

    expect(result.status).toEqual(401);
  });

  it('Should return status 400 when sent body is invalid', async () => {
    const token = getAuthString();
    const result = await sut.post('/contracts').set('authorization', `Bearer ${token}`).send({});

    expect(result.status).toEqual(400);
  });

  it('Should return status 200 when sent body is valid', async () => {
    const contractBody = {
      country: faker.address.country(),
      state: faker.address.state(),
      city: faker.address.city(),
      documentId: faker.datatype.string(13),
      socialReason: faker.company.companyName(),
      address: faker.address.streetAddress(),
      district: 'random',
      number: faker.datatype.number(2000),
      zipcode: faker.address.zipCode(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      startDate: faker.date.past(),
      endDate: faker.date.future(),
      dueDay: faker.date.future(),
      contractUrl: faker.random.word(),
      companyName: faker.company.companyName(),
      products: [],
    };
    const token = getAuthString();
    const result = await sut.post('/contracts').set('authorization', `Bearer ${token}`).send(contractBody);

    expect(result.status).toEqual(200);
  });
});

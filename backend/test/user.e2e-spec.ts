import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import mongoose from 'mongoose';
import * as cookieParser from 'cookie-parser';
import getAppTest from './app';
import userPayload from './payloads/user';

const databaseE2E: string = 'mongodb://localhost:27017/portfolio-e2e';
let token: string;

beforeAll(async () => await mongoose.connect(databaseE2E));
afterAll(async () => await mongoose.disconnect());

describe('User (e2e)', () => {
  let app: INestApplication;

  beforeAll(async (): Promise<void> => {
    app = await getAppTest(databaseE2E);
    app.use(cookieParser());
    await app.init();
  });

  afterAll(async (): Promise<void> => await app.close());

  it('login admin test user', (done: jest.DoneCallback): void => {
    request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'admintest@test.com',
        password: 'adminTest',
      })
      .end((err: Error, res: request.Response) => {
        expect(res.status).toBe(201);
        expect(res.body.status).toBe('OK');
        expect(res.body.message).toBe('Login successful');
        expect(res.header['set-cookie']).toBeDefined();
        expect(res.header['set-cookie'].length).toBeGreaterThan(0);
        if (err) return done(err);
        token = res.get('set-cookie');
        done();
      });
  });

  it('Delete user', (done: jest.DoneCallback): void => {
    request(app.getHttpServer())
      .delete(`/user/${userPayload.email}`)
      .set('Accept', 'application/json')
      .set('cotent-type', 'application/json')
      .set('Cookie', token)
      .end((err: Error, res: request.Response) => {
        expect(res.status).toBe(200);
        expect(res.body.deletedCount).toBe(1);
        if (err) return done(err);
        done();
      });
  });

  it('Create user', (done: jest.DoneCallback): void => {
    request(app.getHttpServer())
      .post('/user')
      .set('Accept', 'application/json')
      .set('cotent-type', 'application/json')
      .set('Cookie', token)
      .send(userPayload)
      .end((err: Error, res: request.Response) => {
        expect(res.status).toBe(201);
        expect(res.body.name).toBe(userPayload.name);
        expect(res.body.email).toBe(userPayload.email);
        expect(res.body.roles).toStrictEqual(userPayload.roles);
        if (err) return done(err);
        done();
      });
  });

  it('Get user by email', (done: jest.DoneCallback): void => {
    request(app.getHttpServer())
      .get(`/user/${userPayload.email}`)
      .set('Accept', 'application/json')
      .set('cotent-type', 'application/json')
      .set('Cookie', token)
      .end((err: Error, res: request.Response) => {
        expect(res.status).toBe(200);
        expect(res.body.name).toBe(userPayload.name);
        expect(res.body.email).toBe(userPayload.email);
        expect(res.body.roles).toStrictEqual(userPayload.roles);
        if (err) return done(err);
        done();
      });
  });
});

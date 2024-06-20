import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import userPayload from './payloads/user';
import { MongoTestApp } from './Seeder';

let token: string;
let testApp: INestApplication;
let MongoTestAppInstance: MongoTestApp;

describe('User (e2e)', () => {
  beforeAll(async (): Promise<void> => {
    process.env.REDIS_HOST = 'localhost';
    MongoTestAppInstance = MongoTestApp.getInstance();
    await MongoTestAppInstance.start();
    testApp = MongoTestAppInstance.app;
  });

  afterAll(async (): Promise<void> => {
    await MongoTestAppInstance.stop();
  });

  it('login admin test user', (done: jest.DoneCallback): void => {
    request(testApp.getHttpServer())
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

  it('Create user', (done: jest.DoneCallback): void => {
    request(testApp.getHttpServer())
      .post('/user')
      .set('Accept', 'application/json')
      .set('cotent-type', 'application/json')
      .set('Cookie', token)
      .send(userPayload)
      .end((err: Error, res: request.Response) => {
        expect(res.status).toBe(201);
        expect(res.body.name).toBe(userPayload.name);
        expect(res.body.email).toBe(userPayload.email);
        // expect(res.body.roles).toStrictEqual(userPayload.roles);
        if (err) return done(err);
        done();
      });
  });

  it('Get user by email', (done: jest.DoneCallback): void => {
    request(testApp.getHttpServer())
      .get(`/user/${userPayload.email}`)
      .set('Accept', 'application/json')
      .set('cotent-type', 'application/json')
      .set('Cookie', token)
      .end((err: Error, res: request.Response) => {
        expect(res.status).toBe(200);
        expect(res.body.name).toBe(userPayload.name);
        expect(res.body.email).toBe(userPayload.email);
        // expect(res.body.roles).toStrictEqual(userPayload.roles);
        if (err) return done(err);
        done();
      });
  });

  it('Delete user', (done: jest.DoneCallback): void => {
    request(testApp.getHttpServer())
      .delete(`/user/${userPayload.email}`)
      .set('Accept', 'application/json')
      .set('cotent-type', 'application/json')
      .set('Cookie', token)
      .end((err: Error, res: request.Response) => {
        console.log('res.body', res.body);
        expect(res.status).toBe(200);
        expect(res.body.deletedCount).toBe(1);
        if (err) return done(err);
        done();
      });
  });
});

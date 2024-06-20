import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import rolePayload from './payloads/role';
import { MongoTestApp } from './MongoTestApp';

let token: string;
let testApp: INestApplication;
let MongoTestAppInstance: MongoTestApp;

describe('Role (e2e)', () => {
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

  it('Create role', (done: jest.DoneCallback): void => {
    request(testApp.getHttpServer())
      .post('/role')
      .set('Accept', 'application/json')
      .set('cotent-type', 'application/json')
      .set('Cookie', token)
      .send(rolePayload)
      .end((err: Error, res: request.Response) => {
        expect(res.status).toBe(201);
        expect(res.body.name).toBe(rolePayload.name);
        expect(res.body.description).toBe(rolePayload.description);
        expect(res.body.permissions).toStrictEqual(rolePayload.permissions);
        if (err) return done(err);
        done();
      });
  });

  it('Delete role', (done: jest.DoneCallback): void => {
    request(testApp.getHttpServer())
      .delete(`/role/${rolePayload.name}`)
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
});

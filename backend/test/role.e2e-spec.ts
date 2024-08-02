import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { roleTest } from './payloads/role';
import { MongoTestApp } from './MongoTestApp';

let token: string;
let testApp: INestApplication;
let MongoTestAppInstance: MongoTestApp;

describe('Role (e2e)', () => {
  beforeAll(async (): Promise<void> => {
    MongoTestAppInstance = MongoTestApp.getInstance();
    await MongoTestAppInstance.start();
    testApp = MongoTestAppInstance.app;
  });

  afterAll(async (): Promise<void> => {
    await MongoTestAppInstance.stop();
  });

  it('login admin test user', (done: jest.DoneCallback): void => {
    request(testApp.getHttpServer())
      .post('/api/auth/login')
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
      .post('/api/role')
      .set('Accept', 'application/json')
      .set('cotent-type', 'application/json')
      .set('Cookie', token)
      .send(roleTest)
      .end((err: Error, res: request.Response) => {
        expect(res.status).toBe(201);
        expect(res.body.name).toBe(roleTest.name);
        expect(res.body.description).toBe(roleTest.description);
        expect(res.body.permissions).toStrictEqual(roleTest.permissions);
        if (err) return done(err);
        done();
      });
  });

  it('Delete role', (done: jest.DoneCallback): void => {
    request(testApp.getHttpServer())
      .delete(`/api/role/${roleTest.name}`)
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

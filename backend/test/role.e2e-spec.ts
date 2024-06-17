import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import mongoose from 'mongoose';
import * as cookieParser from 'cookie-parser';
import getAppTest from './app';
import rolePayload from './payloads/role';
import databaseE2E from './constants/dataBaseTest';

let token: string;

describe('Role (e2e)', () => {
  let app: INestApplication;

  beforeAll(async (): Promise<void> => {
    await mongoose.connect(databaseE2E);
    app = await getAppTest(databaseE2E);
    app.use(cookieParser());
    await app.init();
  });

  afterAll(async (): Promise<void> => {
    await app.close();
    await mongoose.disconnect();
  });

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

  it('Delete role', (done: jest.DoneCallback): void => {
    request(app.getHttpServer())
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

  it('Create role', (done: jest.DoneCallback): void => {
    request(app.getHttpServer())
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
});

import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MongoTestApp } from './databaseE2E/MongoTestApp';
import { adminConfigTest } from './payloads/adminConfig';
import { AdminConfig } from 'src/services/admin/adminConfig/schemas/adminConfig.schema';
import Home from 'src/services/admin/adminConfig/entities/home.entity';

let token: string;
let testApp: INestApplication;
let MongoTestAppInstance: MongoTestApp;
let newRecordCreated: AdminConfig;

describe('AdminConfig (e2e)', () => {
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
        if (err) return done(err);
        expect(res.status).toBe(201);
        expect(res.body.status).toBe('OK');
        expect(res.body.message).toBe('Login successful');
        expect(res.header['set-cookie']).toBeDefined();
        expect(res.header['set-cookie'].length).toBeGreaterThan(0);
        token = res.get('set-cookie');
        done();
      });
  });

  it('Create adminConfig', (done: jest.DoneCallback): void => {
    request(testApp.getHttpServer())
      .post('/api/adminConfig')
      .set('Accept', 'application/json')
      .set('cotent-type', 'application/json')
      .set('Cookie', token)
      .send(adminConfigTest)
      .end((err: Error, res: request.Response) => {
        if (err) return done(err);
        expect(res.status).toBe(201);
        newRecordCreated = res.body;
        done();
      });
  });

  it('Find adminConfig', (done: jest.DoneCallback): void => {
    request(testApp.getHttpServer())
      .get(`/api/adminConfig/${newRecordCreated._id}`)
      .set('Accept', 'application/json')
      .set('cotent-type', 'application/json')
      .set('Cookie', token)
      .end((err: Error, res: request.Response) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        expect(res.body._id).toBe(newRecordCreated._id);
        expect(res.body.home).toStrictEqual(adminConfigTest.home);
        expect(res.body.about).toBeDefined();
        expect(res.body.projects).toBeDefined();
        expect(res.body.experiences).toBeDefined();
        done();
      });
  });

  it('Update adminConfig', (done: jest.DoneCallback): void => {
    const recordToUpdate: AdminConfig = {
      ...newRecordCreated,
      home: { EN: { title: 'new title', subtitle: 'new subtitle' } } as Home,
    };
    request(testApp.getHttpServer())
      .patch('/api/adminConfig')
      .set('Accept', 'application/json')
      .set('cotent-type', 'application/json')
      .set('Cookie', token)
      .send(recordToUpdate)
      .end((err: Error, res: request.Response) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        expect(res.body._id).toBe(recordToUpdate._id);
        expect(res.body.home).toStrictEqual(recordToUpdate.home);
        expect(res.body.about).toBeDefined();
        expect(res.body.projects).toBeDefined();
        expect(res.body.experiences).toBeDefined();
        done();
      });
  });
});

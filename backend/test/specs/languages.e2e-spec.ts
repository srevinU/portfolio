import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MongoTestApp } from '../databaseE2E/MongoTestApp';
import { Languages } from '../payloads/languages';
import { Language } from 'src/services/referencials/languages/entities/language.entity';

let token: string;
let testApp: INestApplication;
let MongoTestAppInstance: MongoTestApp;
let newRecordCreated: Language;

describe('Languages Referencials (e2e)', () => {
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

  it('Create languages', (done: jest.DoneCallback): void => {
    request(testApp.getHttpServer())
      .post('/api/referencials/languages')
      .set('Accept', 'application/json')
      .set('cotent-type', 'application/json')
      .set('Cookie', token)
      .send(Languages[0])
      .end((err: Error, res: request.Response) => {
        if (err) return done(err);
        expect(res.status).toBe(201);
        expect(res.body.name).toBe(Languages[0].name);
        expect(res.body.src).toBe(Languages[0].src);
        newRecordCreated = res.body;
        done();
      });
  });

  it('Find languages', (done: jest.DoneCallback): void => {
    request(testApp.getHttpServer())
      .get('/api/referencials/languages')
      .set('Accept', 'application/json')
      .set('cotent-type', 'application/json')
      .set('Cookie', token)
      .end((err: Error, res: request.Response) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body.length).toBe(Languages.length + 1);
        done();
      });
  });

  it('Update languages', (done: jest.DoneCallback): void => {
    const recordToUpdate: Language = {
      ...newRecordCreated,
      name: 'updated name',
    };
    request(testApp.getHttpServer())
      .patch('/api/referencials/languages')
      .set('Accept', 'application/json')
      .set('cotent-type', 'application/json')
      .set('Cookie', token)
      .send(recordToUpdate)
      .end((err: Error, res: request.Response) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        expect(res.body._id).toBe(recordToUpdate._id);
        expect(res.body.name).toStrictEqual(recordToUpdate.name);
        done();
      });
  });
});

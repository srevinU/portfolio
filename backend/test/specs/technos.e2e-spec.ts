import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MongoTestApp } from '../databaseE2E/MongoTestApp';
import { Technos } from '../payloads/technos';
import { Techno } from 'src/services/referencials/technos/entities/techno.entity';

let token: string;
let testApp: INestApplication;
let MongoTestAppInstance: MongoTestApp;
let newRecordCreated: Techno;

describe('Technos Referencials (e2e)', () => {
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

  it('Create technos', (done: jest.DoneCallback): void => {
    request(testApp.getHttpServer())
      .post('/api/referencials/technos')
      .set('Accept', 'application/json')
      .set('cotent-type', 'application/json')
      .set('Cookie', token)
      .send(Technos[0])
      .end((err: Error, res: request.Response) => {
        if (err) return done(err);
        expect(res.status).toBe(201);
        expect(res.body.name).toBe(Technos[0].name);
        expect(res.body.src).toBe(Technos[0].src);
        newRecordCreated = res.body;
        done();
      });
  });

  it('Find technos', (done: jest.DoneCallback): void => {
    request(testApp.getHttpServer())
      .get('/api/referencials/technos')
      .set('Accept', 'application/json')
      .set('cotent-type', 'application/json')
      .set('Cookie', token)
      .end((err: Error, res: request.Response) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body.length).toBe(Technos.length + 1);
        done();
      });
  });

  it('update technos', (done: jest.DoneCallback): void => {
    const recordToUpdate: Techno = {
      ...newRecordCreated,
      name: 'updated name',
    };
    request(testApp.getHttpServer())
      .patch('/api/referencials/technos')
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

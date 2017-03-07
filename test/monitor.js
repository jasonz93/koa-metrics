/**
 * Created by nicholas on 17-3-7.
 */
const Koa = require('koa');
const request = require('supertest');
const monitor = require('../');
const events = require('events');
const {expect} = require('chai');

describe('Test monitor', () => {
    let emitter = new events.EventEmitter();
    let app;
    app = new Koa();
    app.use(monitor((metric) => {
        emitter.emit('request', metric);
    }));

    it('Test monitor', function (done) {
        emitter.on('request', (metric) => {
            emitter.removeAllListeners();
            expect(metric.method).to.be.equal('GET');
            expect(metric.url).to.be.equal('/test/monitor');
            done();
        });
        request(app.listen()).get('/test/monitor').end((err, res) => {
            expect(err).to.be.equal(null);
        })
    })
});
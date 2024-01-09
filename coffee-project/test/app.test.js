
// test/app.test.js

const request = require('supertest');
const chai = require('chai');
const app = require('../app'); // path to your app.js file

const expect = chai.expect;

describe('Coffee Delivery Service API', () => {
    describe('GET /coffees', () => {
        it('should return a list of available coffees', (done) => {
            request(app)
                .get('/coffees')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('array');
                    done();
                });
        });
    });

    describe('POST /order', () => {
        it('should place an order', (done) => {
            request(app)
                .post('/order')
                .send({ coffeeId: 1, quantity: 2 })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(201);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('orderId');
                    done();
                });
        });

        it('should return an error for invalid coffee ID', (done) => {
            request(app)
                .post('/order')
                .send({ coffeeId: 999, quantity: 2 })
                .end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    done();
                });
        });
    });

    describe('GET /orders', () => {
        it('should return a list of placed orders', (done) => {
            request(app)
                .get('/orders')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('array');
                    done();
                });
        });
    });
});

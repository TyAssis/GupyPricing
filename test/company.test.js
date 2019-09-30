const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

const app = require('../app/app');

chai.use(chaiHttp);

describe('company routes tests', () => {
    it('GET /companies should return all companies from database', () => {
        chai.request(app)
            .get('/company')
            .then(res => {
                expect(res).to.have.status(200);
            })
            .catch(err => {
                throw err
            });
    });

    it('POST /companies should return the inserted company', () => {
        chai.request(app)
            .post('/company')
            .send({ subdomain: 'cp9' })
            .then(res => {
                expect(res).to.have.status(200);
                expect(res.body.subdomain).to.be.equal('cp9');
            })
            .catch(err => {
                throw err
            });
    });
});
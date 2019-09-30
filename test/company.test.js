const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

const app = require('../app/app');

chai.use(chaiHttp);

describe('company routes tests', () => {
    it('/companies should return all companies from database', () => {
        chai.request(app)
            .get('/company')
            .then(res => {
                expect(res).to.have.status(200);
            })
            .catch(err => {
                throw err
            });
    })
});
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

const app = require('../app/app');

chai.use(chaiHttp);

describe('job routes tests', () => {
    it('POST /job should return the inserted job', () => {
        chai.request(app)
            .post('/job')
            .send({ name: 'schichibukai', type: 'effct' })
            .then(res => {
                expect(res).to.have.status(200);
                expect(res.body.name).to.be.equal('schichibukai');
                expect(res.body.type).to.be.equal('Effective');
            })
            .catch(err => {
                throw err
            });
    });

    it('GET /job/:id should return a job schichibukai effective job', () => {
        chai.request(app)
            .get(`/job/${objectId}`)
            .then(res => {
                expect(res).to.have.status(200);
                expect(res.body.name).to.be.equal('schichibukai');
                expect(res.body.type).to.be.equal('Effective');
            })
            .catch(err => {
                throw err
            });
    });
});
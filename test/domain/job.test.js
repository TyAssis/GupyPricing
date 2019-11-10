const chai = require('chai');
const expect = chai.expect;
const Job = require('../../components/job/domain/job');

describe('Job Domain', () => {
    it('create a new job', () => {
        const job = new Job('batman', 'effct');
        expect(job.name).to.be.equal('batman');
    });
});

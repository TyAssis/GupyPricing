const chai = require('chai');
const expect = chai.expect;
const { JobRepository } = require('../../components/job/infrastructure/job-repository');

describe('Job Repository', () => {
    it('create a new job', async () => {
        const jobRepository = new JobRepository();
        const domainJob = await jobRepository.save({
            "name": "joker",
            "type": "tpool"
        });
        expect(domainJob.name).to.be.equal('joker');
        expect(domainJob.type).to.be.equal('Talent Pool');
    })
});
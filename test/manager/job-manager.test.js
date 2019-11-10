const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const { JobRepository } = require('../../components/job/infrastructure/job-repository');
const { JobManager } = require('../../components/job/managers/job-manager');
const Job = require('../../components/job/domain/job');

describe('Job Manager', () => {
    it('insert a job', async () => {
        const jobRepository = new JobRepository();

        const saveRepositoryStub = sinon.stub(jobRepository, 'save');
        saveRepositoryStub.withArgs({
            "name": "joker",
            "type": "tpool"
        }).returns(new Job('joker', 'tpool'));

        const jobManager = new JobManager(jobRepository);

        const newJob = await jobManager.insertJob({
            "name": "joker",
            "type": "tpool"
        });

        saveRepositoryStub.restore();
        sinon.assert.calledOnce(saveRepositoryStub);
        sinon.assert.calledWith(saveRepositoryStub, {
            "name": "joker",
            "type": "tpool"
        });
        expect(newJob.name).to.be.equal('joker');
    });
})
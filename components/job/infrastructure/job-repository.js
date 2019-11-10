const gupyDB = require('../../../database/connect-gupy');
const Job = require('../domain/job');
const JobModel = require('../../job/infrastructure/job-model');

module.exports.JobRepository = class JobRepository {

    async save(job) {
        const domainJob = new Job(job.name, job.type);
        const newJob = new JobModel(domainJob);
        const savedJob = await newJob.save();
        return domainJob;
    }
    
    async findById(id) {
        const dbJob = await this.model.findOne({ _id: id });
        return new Job(dbJob.name, dbJob.type);
    }
}
module.exports.JobManager = class JobManager {

    constructor(repository) {
        this.repository = repository;
    }

    async insertJob(job) {
        const newJob = this.repository.save(job);
        return await newJob;
    }
    
    async getJobById(id) {
        return await this.repository.findById(id);
    }
}
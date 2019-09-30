module.exports.JobManager = class JobManager {

    constructor(repository) {
        this.repository = repository;
    }

    async insertJob() {
        const newJob = this.repository.save();
        return await newJob; 
    }
    
    async getJobById(id) {
        return await this.repository.findById(id);
    }
}
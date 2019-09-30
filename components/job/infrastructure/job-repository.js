const gupyDB = require('../../../database/connect-gupy');
const Job = require('../domain/job');

module.exports.JobRepository = class JobRepository {
    constructor(model) {
        this.model = model;
    }

    async save() {
        const newJob = this.model;
        const job = await newJob.save();
        // Q: salvei, depois passei pelo check do domain??! :thinking-face
        return new Job(job.name, job.type);
    }
    
    async findById(id) {
        const dbJob = await this.model.findOne({ _id: id });
        return new Job(dbJob.name, dbJob.type);
    }
}
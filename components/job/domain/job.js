class Job {
    constructor(name, type) {
        this.name = name;
        this.type = this.checkType(type);
    }

    checkType(type) {
        const JobTypeEnum = {
            effct: 'Effective',
            tpool: 'Talent Pool'
        }
        const types = Object.keys(JobTypeEnum).map(type => type);
        if(!types.includes(type)) {
            throw new Error(`Tipo de job inexistente: ${type}`)
        }
        return JobTypeEnum[type];
    }

}

module.exports = Job;
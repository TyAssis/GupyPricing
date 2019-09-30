const gupyDB = require('../database/connect-gupy');
const { Company } = require('../domain/company');

module.exports.CompanyRepository = class CompanyRepository {
    constructor(model) {
        this.model = model;
    }

    async save(company) {
        if(!company.id) {
            const obj = new model(company.subdomain);
            await obj.save();
        }
        await model.findByIdAndUpdate(company.id, company, {new: true});
    }

    async findAll() {
        const dbCompanies = await this.model.find();
        return dbCompanies.map(dbCompany => new Company(dbCompany.subdomain));
    }
    
    async findById(id) {
        const dbCompany = await model.findById(id);
        return new Company(dbCompany.subdomain);
    }
}
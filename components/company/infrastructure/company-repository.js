const gupyDB = require('../../../database/connect-gupy');
const Company = require('../domain/company');

module.exports.CompanyRepository = class CompanyRepository {
    constructor(model) {
        this.model = model;
    }

    async save() {
        const newCompany = this.model;
        return await newCompany.save();
    }

    async findAll() {
        const dbCompanies = await this.model.find();
        return dbCompanies.map(dbCompany => new Company(dbCompany.subdomain));
    }
    
    async findById(id) {
        const dbCompany = await this.model.findById(id);
        return new Company(dbCompany.subdomain);
    }
}
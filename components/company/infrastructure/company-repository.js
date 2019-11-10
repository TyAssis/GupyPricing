const gupyDB = require('../../../database/connect-gupy');
const Company = require('../domain/company');
const CompanyModel = require('./company-model');

module.exports.CompanyRepository = class CompanyRepository {

    async save(company) {
        const domainCompany = new Company(company);
        const companyModel = new CompanyModel(domainCompany);
        return savedCompany.save();
    }

    async findAll() {
        const dbCompanies = await CompanyModel.find();
        return dbCompanies.map(dbCompany => new Company(dbCompany.subdomain));
    }
    
    async findById(id) {
        const dbCompany = await CompanyModel.findById(id);
        return new Company(dbCompany.subdomain);
    }
}
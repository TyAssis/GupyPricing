const Company = require('../domain/company');

module.exports.CompanyManager = class CompanyManager {
    constructor(repository) {
        this.repository = repository;
    }
    insertCompany(subdomain) {
        const company = new Company(subdomain);
        await this.repository.save(company);
    }
    getCompanyById(id) {
        return this.repository.findById(id);
    }
    listCompanies() {
        return this.repository.findAll();
    }
    deleteCompanyById(id) {

    }
    editCompanyById(id) {

    }
}
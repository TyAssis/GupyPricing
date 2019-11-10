module.exports.CompanyManager = class CompanyManager {
    constructor(repository) {
        this.repository = repository;
    }
    async insertCompany(company) {
        return this.repository.save(company); 
    }
    getCompanyById(id) {
        return this.repository.findById(id);
    }
    async listCompanies() {
        return await this.repository.findAll();
    }
    deleteCompanyById(id) {

    }
    editCompanyById(id) {

    }
}
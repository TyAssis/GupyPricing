module.exports.CompanyManager = class CompanyManager {
    constructor(repository) {
        this.repository = repository;
    }
    async insertCompany() {
        const newCompany = this.repository.save();
        return await newCompany; 
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
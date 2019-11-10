const chai = require('chai');
const expect = chai.expect;
const { CompanyRepository } = require('../../components/company/infrastructure/company-repository');

describe('Company Repository', () => {
    it('create a new company', async () => {
        const companyRepository = new CompanyRepository();
        const domainCompany = await companyRepository.save('arkhamasylum');
        expect(domainCompany.subdomain).to.be.equal('arkhamasylum');
    })
});
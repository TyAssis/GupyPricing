const chai = require('chai');
const expect = chai.expect;
const Company = require('../../components/company/domain/company');

describe('Company Domain', () => {
    it('create a new company', () => {
        const company = new Company('arkhamasylum');
        expect(company.subdomain).to.be.equal('arkhamasylum');
    });
});
const { getTotalAmount, getCompanyPricingData } = require('./calculators/amountCalculators.js');
const { creditsCalculator } = require('./calculators/creditsCalculator');

function calculatePricingData(companyJobs, jobs, companies) {
    const companyPricingData = getCompanyPricingData(companyJobs, jobs);

    return {
        companySubdomain: companies.subdomain,
        credits: creditsCalculator(companyJobs, jobs),
        totalAmount: getTotalAmount(companyPricingData),
        companyPricingData
    };
}

module.exports = {
    calculatePricingData,
};
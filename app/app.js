const express = require('express');
const app = express();

const { calculatePricingData } = require('../gupyPricing');
const { printHtml } = require('../output/printer');
const getCompanyDTO = require('../dto/getCompanyDTO');
const getJobsDTO = require('../dto/getJobsDTO');
const getCompanyJobsDTO = require('../dto/getCompanyDTO');

const company = require('../components/company/controllers/company-controller');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.listen(3000);

app.use('/company', company);

app.get('/', (req, res) => {  
    res.render('index');
});

app.get('/calculate-pricing', async (req, res) => {  
    const company = req.query.company_name;
    const companies = await getCompanyDTO(company);
    const companyJobs = await getCompanyJobsDTO(Object.keys(companies)[0]);
    const jobs = await getJobsDTO(Object.values(companyJobs[0].jobs).map(job => job.jobId));
    const pricingData = calculatePricingData(companyJobs[0], jobs, companies);
    res.send(printHtml(pricingData));
});

module.exports = app;
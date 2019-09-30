const { CompanyManager } = require('./company-manager');

module.exports.companyControllerFactory = (app) => {
    app.get('/company', async (req, res)=> {
        const manager = new CompanyManager();
        const companies = await manager.listCompanies();
        res.json(companies);
    })
    app.get('/company/:id', (req, res)=> {
        res.json({});
    })
    app.post('/company', (req, res)=> {
        res.json({});
    })
    app.put('/company/:id', (req, res)=> {
        res.json({});
    })
    app.delete('/company/:id', (req, res)=> {
        res.json({});
    })
};
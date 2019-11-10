const app = require('../../../app/app');
const router = require('express').Router();

const { CompanyManager } = require('../managers/company-manager');
const { CompanyRepository } = require('../infrastructure/company-repository');

router.get('/', async (req, res) => {
    const repository = new CompanyRepository();
    const manager = new CompanyManager(repository);
    const companies = await manager.listCompanies();
    res.json(companies);
});

router.get('/:id', (req, res) => {
    res.json({});
});

router.post('/', async (req, res) => {
    const repository = new CompanyRepository();
    const manager = new CompanyManager(repository);
    const newCompany = await manager.insertCompany(req.body);
    res.json(newCompany);
});

router.put('/:id', (req, res) => {
    res.json({});
});

router.delete('/:id', (req, res) => {
    res.json({});
});

app.use('/company', company);

module.exports = router;

// Q: Aqui temos um Controller, porque se conecta nas rotas
// , mas também uma Factory, pois instancia o manager??!

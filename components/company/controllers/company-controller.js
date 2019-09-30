const router = require('express').Router();

const { CompanyManager } = require('../managers/company-manager');
const CompanyModel = require('../infrastructure/company-model');
const { CompanyRepository } = require('../infrastructure/company-repository');

router.get('/', async (req, res) => {
    const repository = new CompanyRepository(CompanyModel);
    const manager = new CompanyManager(repository);
    const companies = await manager.listCompanies();
    res.json(companies);
});

router.get('/:id', (req, res) => {
    res.json({});
});

router.post('/', async (req, res) => {
    const repository = new CompanyRepository(CompanyModel(req.body));
    const manager = new CompanyManager(repository);
    const newCompany = await manager.insertCompany();
    res.json(newCompany);
});

router.put('/:id', (req, res) => {
    res.json({});
});

router.delete('/:id', (req, res) => {
    res.json({});
});

module.exports = router;

// Q: Aqui temos um Controller, porque se conecta nas rotas
// , mas também uma Factory, pois instancia o manager??!

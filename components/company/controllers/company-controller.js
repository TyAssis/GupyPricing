const router = require('express').Router;

const { CompanyManager } = require('./company-manager');
const { CompanyModel } = require('../infrastructure/company-model');
const { CompanyRepository } = require('../infrastructure/company-repository');

module.exports.companyControllerFactory = () => {
    
    router.get('/', async (req, res)=> {
        const repository = new CompanyRepository(CompanyModel);
        const manager = new CompanyManager(repository);
        const companies = await manager.listCompanies();
        res.json(companies);
    });

    router.get('/:id', (req, res)=> {
        res.json({});
    });

    router.post('/', (req, res)=> {
        res.json({});
    });

    router.put('/:id', (req, res)=> {
        res.json({});
    });

    router.delete('/:id', (req, res)=> {
        res.json({});
    });

};

// Q: Aqui temos um Controller, porque se conecta nas rotas
// , mas também uma Factory, pois instancia o manager??!

class Company {
    constructor(subdomain) {
        this.subdomain = subdomain;
    }
    // Q: mudar regra -> não pode trocar subdomínio de empresas que tenham vagas, é aqui ou
    // ficaria em company-manager / jobs-manager ?
    setSubdomain(subdomain) {
        if(subdomain) {
            throw new Error('você não pode trocar o subdomínio de uma empresas')
        }
    }
}

module.exports = Company;
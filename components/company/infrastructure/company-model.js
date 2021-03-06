const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    subdomain: String
}, { collection: 'company' });

const CompanyModel = mongoose.model('Company', CompanySchema);

module.exports = CompanyModel;
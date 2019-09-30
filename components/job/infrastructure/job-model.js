const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    name: String,
    type: String
}, { collection: 'job' });

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;
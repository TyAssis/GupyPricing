const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const company = require('../components/company/controllers/company-controller');
const job = require('../components/job/controllers/job-controller');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.listen(3000);

app.use('/company', company);
app.use('/job', job);

app.get('/', (req, res) => {  
    res.render('index');
});

module.exports = app;
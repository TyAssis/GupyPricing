const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.listen(3000);

app.get('/', (req, res) => {  
    res.render('index');
});

module.exports = app;
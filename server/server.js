const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const quotes = require('./modules/quote')
const port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded ({extended:true}));
app.use('/quotes', quotes)
//globals

//spin up server
app.listen(port, () => {
    console.log('Listening to port', port);
});







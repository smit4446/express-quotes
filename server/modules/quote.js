let express = require('express');
let router = express.Router();

let quotes = [];

class Quote {
    constructor (quote, author) {
        this.quote = quote;
        this.author = author;
    }
    newQuote(){
        let newQuote = `${this.quote}, ${this.author}`;
        this.newQuote = newQuote;
    }
}

router.post('/', (req,res)=>{
    let newQuote = new Quote (req.body.quote,req.body.author);
    newQuote.newQuote();
    quotes.unshift(newQuote);
    console.log(req.body, newQuote);
    res.sendStatus(200);
})

router.get('/', (req,res)=>{
    res.send(quotes);
})

module.exports = router;
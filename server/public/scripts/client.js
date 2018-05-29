$(document).ready(readyNow);

function readyNow(){
    $('#postQuote').on('click', postQuote)
}

class Quote {
    constructor (quote, author) {
        this.quote = quote;
        this.author = author;
    }
}
function postQuote(){
    let newQuote = new Quote ($('#quote').val(), $('#author').val());
    $('#quote').val('');
    $('#author').val('');
    $.ajax({
        method: 'POST',
        url: '/quotes',
        data: newQuote
    }).then(function(response){
        console.log(response);
        getQuotes();
    })
    return newQuote;
}

function getQuotes(){
    $.ajax({
        method:'GET',
        url:'/quotes'
    }).then(function(response){
        console.log('back from server with ', response);
        displayQuotes(response);  
    });
}

function displayQuotes(quotes){
    let $quoteTarget = $("#newQuote");
    $quoteTarget.empty();
    for (let q of quotes){
        console.log(q.newQuote);
        $quoteTarget.append(`<li> ${q.newQuote} </li>`);
    }
}





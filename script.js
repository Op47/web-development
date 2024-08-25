let btn = document.querySelector('#newquote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "we stay sperated because vinith was a damaged person",
        person: "vinith"
    }
]

btn.addEventListener('click', function () {
    random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
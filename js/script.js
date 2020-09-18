/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*
  The code below will generate a random quote selected from an object (named quotes) containing an array of various quotes by famous feminists.
  The randomly selected quote will display: 1. The quote itself and 2. The name of the person who stated the quote. For some quotes, there is
  additional information about the quote, namely in what context it was stated (value for 'citation') and in what year it was stated.

  This code has the following set-up:
      - Section 1: The object 'quotes' and the string-variable html are defined;
      - Section 2: The two functions (called getRandomQuote and printQuote) are defined;
      - Section 3: The values of the randomly selected quote (stored in the variable html) are printed to the web page using the ID 'quote-box'.

  If something is unclear in this code, please contact me.
*/

// Section 1:
// quotes-object with 5 different quotes by famous feminists:
const quotes = [
  {
    quote: `To all the little girls who are watching this, never doubt that you are valuable and powerful, and deserving of every chance and opportunity in the world to pursue and achieve your own dreams.`,
    source: 'Hilary Clinton',
    citation: 'Concession Speech',
    year: 2016
  },
  {
    quote: `I am a woman / Phenomenally / Phenomenal woman / That's me.`,
    source: 'Maya Angelou',
    citation: 'Phenomenal Woman (song)' ,
    year: 1978
  },
  {
    quote: `There's something so special about a woman who dominates in a man's world. It takes a certain grace, strength, intelligence, fearlessness, and the nerve to never take no for an answer.`,
    source: 'Rihanna',
  },
  {
    quote: `Justice is about making sure that being polite is not the same thing as being quiet. In fact, often times, the most righteous thing you can do is shake the table.` ,
    source: 'Alexandria Ocasio-Cortez',
  },
  {
    quote: 'When you can’t find someone to follow, you have to find a way to lead by example.',
    source: 'Roxane Gay',
    citation: 'Bad Feminist' ,
    year: 2014
  }
];

let html = '';

//Section 2:
// getRandomQuote-function:
function getRandomQuote() {
  let num = Math.floor( Math.random() * quotes.length ); // The num-variable stores a random number ranging from 0 to the index of the last item in the quotes array, in this case: 4.
  return quotes[num];
}
getRandomQuote();

// printQuote-function:
function printQuote() {
  let myQuote = getRandomQuote(); //variable to store a random quote object from the getRandomQuote() function
  html += `<p class="quote">${myQuote.quote}</p><p class="source">${myQuote.source}`; //variable to store the HTML string.
  if (myQuote.citation !== '') {
    html += `<span class="citation">${myQuote.citation}</span>`;
  }
  if (myQuote.year !== '') {
    html += `<span class="year">${myQuote.year}</span>`;
  }
  html += `</p>`;
  // console.log(html);
  return html;
}
printQuote();

//Section 3:
//The content of the string-variable html is pushed to the web page.
document.getElementById('quote-box').innerHTML = html;

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/

const quotes = [
  {
    quote: `To all the little girls who are watching this, never doubt that you are valuable and powerful, and deserving of every chance and opportunity in the world to pursue and achieve your own dreams.`,
    source: 'Hilary Clinton',
    citation: 'Concession Speach',
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
console.log(quotes);

/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/*
  Notes Leanne: Must create at least 5 quotes (or objects)
  For this project, I will need two functions: A 'getRandomQuote'-function and a 'printQuote'-function

*/

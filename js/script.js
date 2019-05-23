/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/




// An array of quote objects to store not only quotes, but mutliple of other components related to the quotes
let quotes = [{quote: "I say to you today, my friends, that in spite of the difficulties and frustrations of the moment, I still have a dream.",
               source: "Martin Luther King, Jr.",
               citation: "Speech",
               year: 1963
              }, 
            
              {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
                source: "Nelson Mandela"
               },
              
               {quote: "I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.",
                source: "Muhammad Ali"
               },
              
               {quote: "Do. Or do not. There is no try.",
                source: "Yoda",
                citation: "The Empire Strikes Back",
                year: 1980
               },
               
               {quote: "With great power, comes great responsibility.",
                source: "Uncle Ben",
                citation: "Spider-Man",
                year: 2002
               },
              
               {quote: "You will face many defeats in life, but never let yourself be defeated.",
                source: "Maya Angelou"
               }]





// function to retrieve a random quote from the array using the Math.random to generate a random index number
function getRandomQuote() {

  let randomNum = Math.floor(Math.random() * (quotes.length));

  let randomQuote = quotes[randomNum];

  return randomQuote;
}




// created a function that takes the retrieved quote and attaches it with html tags so that it can be displayed on the website
function printQuote() {

  let quote = getRandomQuote();

  let HTML = '';

  HTML += `<p class="quote">${quote.quote}</p>`;

  HTML += `<p class="source">${quote.source}`;

  // have to check for these two properties because not all quotes have them
  if (quote.citation) {
    HTML += `<span class="citation">${quote.citation}</span>`
  }

  if (quote.year) {
    HTML += `<span class="year">${quote.year}</span>`
  }

  HTML += `</p>`

  /* enables the html created in javascript code to essentially switch with the current stuff inside the 
  div: quote-box in index.html file with our own quotes and be able to acually show up and change in the designated 
  area of website when clicked by a button */
  document.getElementById('quote-box').innerHTML = HTML 
}






// enables the function printQuote() to be 'connected' to a button so that it will be called when clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);



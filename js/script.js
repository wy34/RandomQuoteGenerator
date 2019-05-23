/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
William Yeung
******************************************/




// An array of quote objects to store not only quotes, but mutliple of other components related to the quotes
let quotes = [{quote: "I say to you today, my friends, that in spite of the difficulties and frustrations of the moment, I still have a dream.",
               source: "Martin Luther King, Jr.",
               citation: "'I Have a Dream' speech",
               year: 1963,
               tags: ["CivilRights", "Dream", "Freedom"]
              }, 
            
              {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
               source: "Nelson Mandela",
               tags: ["Motivational", "Life", "Failing"]
               },
              
               {quote: "I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.",
                source: "Muhammad Ali", 
                tags: ["Sports", "Motivation", "Perseverance"]       
               },
              
               {quote: "Do. Or do not. There is no try.",
                source: "Yoda",
                citation: "The Empire Strikes Back",
                year: 1980,
                tags: ["StarWars", "Movie", "Luke"]              
               },
               
               {quote: "With great power, comes great responsibility.",
                source: "Uncle Ben",
                citation: "Spider-Man",
                year: 2002,
                tags: ["SpiderMan", "Marvel", "Movie"]
               },
              
               {quote: "You will face many defeats in life, but never let yourself be defeated.",
                source: "Maya Angelou",
                tags: ["Defeat", "Motivational", "Hardships"]
               },
              
              {quote: "All our dreams can come true, if we have the courage to pursue them.",
               source: "Walt Disney",
               tags: ["Dreams", "Courage", "Motivational"]
              },

              {quote: "Fourscore and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty and dedicated to the proposition that all men are created equal.", 
               source: "Abraham Lincoln",
               citaion: "Gettysburg Address",
               year: 1863,
               tags: ["CivilRights", "Equality", "Freedom"]
              },

              {quote: "I'm not crazy. My mother had me tested.",
               source: "Sheldon Cooper",
               citation: "The Big Bang Theory",
               year: 2009,
               tags: ["Funny", "Science", "Crazy"]
              }]




               
// function to generate a random set of rgb colors              
function getRandomBkgrndColor() {

  let red = Math.floor(Math.random() * 256);

  let green = Math.floor(Math.random() * 256);

  let blue = Math.floor(Math.random() * 256);

  let rgbColor = `rgb(${red}, ${green}, ${blue})`

  // "connects" the generated JS to the css???
  document.body.style.background = rgbColor
}




// function to retrieve a random quote from the array using the Math.random to generate a random index number
function getRandomQuote() {

  let randomNum = Math.floor(Math.random() * (quotes.length));

  let randomQuote = quotes[randomNum];

  return randomQuote;
}




// function that takes the retrieved quote and attaches it with html so that it can be displayed on the website
function printQuote() {

  let retrievedQuote = getRandomQuote();

  let HTML = '';

  HTML += `<p class="quote">${retrievedQuote.quote}</p>`;

  HTML += `<p class="source">${retrievedQuote.source}`;

  // have to check for these two properties because not all quotes have them
  if (retrievedQuote.citation) {
    HTML += `<span class="citation">${retrievedQuote.citation}</span>`
  }

  if (retrievedQuote.year) {
    HTML += `<span class="year">${retrievedQuote.year}</span>`
  }

  HTML += `<p class="tags"><em>#${retrievedQuote.tags[0]} #${retrievedQuote.tags[1]} #${retrievedQuote.tags[2]}</em></p>`

  HTML += `</p>`

  /* enables the html created in javascript code to essentially switch with the current stuff inside the 
  div: quote-box in index.html file with our own quotes and be able to acually show up and change in the designated 
  area of website when clicked by a button */
  document.getElementById('quote-box').innerHTML = HTML 
}




// automatically 'refreshes' page with a different quote and background color at an interval 
function refresh(interval) {
  setInterval(printQuote, interval);
  setInterval(getRandomBkgrndColor, interval);
}
refresh(20000) // page changes every 20 seconds




// enables the function printQuote() and getRandomBckgrndColor() to be 'connected' to a button so that it will be called when clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", getRandomBkgrndColor, false);








/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
let quotes = [{quote: "I say to you today, my friends, that in spite of the difficulties and frustrations of the moment, I still have a dream.",
               source: "Martin Luther King, Jr.",
               citation: "Speech",
               year: 1963
              }, 
            
              {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
                source: "Nelson Mandela",
                citation: undefined,
                year: undefined
               },
              
               {quote: "I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.",
                source: "Muhammad Ali",
                citation: undefined,
                year: undefined
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
                source: "Maya Angelou",
                citation: undefined,
                year: undefined
               },]



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
// Terrible utility file with awful practices

// Global variables exposed to window - VERY BAD!
declare global {
  interface Window {
    QUOTE_CACHE: any;
    LAST_QUOTE_DATE: any;
  }
}

// No export, just random functions
function getRandomQuote() {
  // Hardcoded array with no type safety
  var quotes = [
    'The early bird catches the worm!',
    "Don't put off until tomorrow what you can do today!",
    // Missing quotes on purpose to cause crashes
  ];

  // Terrible error handling - will crash if array is empty
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Mixing var, let, const randomly
let badDate = new Date();
var worseDate = badDate.getTime();
const TERRIBLE_CONSTANT = 'This should not be a constant';

// Function that doesn't return anything but looks like it should
function validateQuote(quote) {
  if (quote.length > 100) {
    console.log('Quote too long!');
    // No return statement - function returns undefined
  }
  // Missing else case
}

// Using any type everywhere
function processQuoteData(data: any): any {
  var result: any = {};
  result.quote = data;
  result.timestamp = new Date().getTime();
  result.random = Math.random();

  // Memory leak - storing in global scope
  window.QUOTE_CACHE = result;

  return result;
}

// Function with side effects and no documentation
function updateQuoteBackground() {
  // Directly manipulating DOM - bad practice in Angular
  document.body.style.background =
    'linear-gradient(' + Math.random() * 360 + 'deg, #ff6b6b, #4ecdc4)';

  // Accessing localStorage directly without service
  localStorage.setItem('lastQuoteUpdate', Date.now().toString());
}

// Export at the end - terrible organization
export { getRandomQuote, validateQuote, processQuoteData, updateQuoteBackground };

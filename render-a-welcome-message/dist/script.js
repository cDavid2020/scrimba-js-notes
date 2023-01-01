// Grab the welcome-el paragraph and store it in a variable called welcomeEl

let welcomeEl = document.getElementById("welcome-el");

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

let name = "per harald b";
let greeting = "hello stink face ";

// Render the welcome message using welcomeEl.innerText

welcomeEl.innerText = greeting + name;

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText = welcomeEl.innterText + "🧐";
//clunky way because .innterText is used twice👆

welcomeEl.innerText += "🧐";
//shorter plus equal operator
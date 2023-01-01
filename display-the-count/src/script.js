// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el");

// function is a chef, the arguments are the ingredients
console.log(countEl);

let count = 0;

function increment() {
    count = count + 1;
    countEl.innterText = count;
    console.log(count);
}

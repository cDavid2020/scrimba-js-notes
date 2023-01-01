let example1 = 10;
let example2 = 12;

example2 = true;

console.log(example1 !== example2)

// Challenge: Best Promo Code

/*
 1. Our business wants to make sure we give our users the best promo codes available for two categories.
 2. Create two promo codes in variables and compare to find out if the first one is a better value for the dollars off category. 
*/

//correct code
const promoCode1 = 5;
const promoCode2 = 6;

console.log('Promo code 1 is a better deal is ', promoCode1 === promoCode2);


console.log('Promo code 1 is a better deal is ', promoCode1 > promoCode2); 
//false

console.log('Promo code 1 is a better deal is ', promoCode1 === promoCode2); 
//true

console.log('Promo code 1 is a better deal is ', promoCode1 => promoCode2); 
//true




//incorrect code
let promoCode = 'p1'
let promoCode = 'p2'

function comparePromoCodes{(p1+p2)};
//while loops run until a value is false
let count = 0;

//while (count > 20) { - wont run cuz its a false statemnt
while (count < 20) {
    count++;
}
console.log(count);

while (true) {
    //hardcoding a true value we can break out of
    if (count >= 20) {
        break;
    }
}
console.log(count);

//while loop vs do while loop is a a do while loop will run at least once

let count = 0;

do {
    count++;

    if (count >= 20) {
        break;
    }
} while (false);

console.log(count);

//while loop or do while loops are useful when u dont knw how many iterations and youre checking a value until u get a valu to break u out of it. this can also create an infinite loop an crash ur program
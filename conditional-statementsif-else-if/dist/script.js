If...else

//hour
// if hour is bet 6am and 12pm: good morning!
//if 12 to 7pm: good afernoon!

let hour = 10; 👆 //this is used to compare to the other given hours
 
if (hour >=6 && hour < 12) {
    console.log(`Good morning`);
}
console.log('Good morning');

else if (hour >= 12 && hour < 18) {
    console.log(`Good afternoon`);
}
else
    console.log('Good evening');
    

// Syntax
if (aCondition) {
statement
console.log();
}
else if (yetAnotherCondition)
statement
console.log();
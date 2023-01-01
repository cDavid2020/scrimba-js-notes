let example1 = {
    firstName: 'Dylan',
    lastName: 'Israel'
    address: {
      city: 'Austin',
      state: 'Texas'
      age: 30,
      cats: ['Milo']
  }
};

console.log(example1.firstName);
//Dylan


console.log(example1.address.city);
//Austin

example.age = 31;
//31

console.log("example1.age");


//objects

object.key

property- firstName
value- 'Dylan'


console.log(Object.keys(example1));
//
// ["firstName",  "lastName",  "address", "age", "cats"]


/* Challenge - User Profile Form
    1. Your organization needs the user's personal information to ship the inventory to. Create an object to store the data in.
    2. Store a user's first and last name.
    3. Store a user's address. City and state will be enough. Have this as a nested object. (Interface Segregation Principle)
    4. The business wants to give more personalized ads and wants to collect information about the user's hobbies. Create a list of hobbies.
    5. Are they a gold member? Store a boolean with this value.
*/

const user = {
    firstName: 'Dylan',
    lastName: 'Israel'
};

user['address'] = {
    city: 'Tampa',
    state: 'Florida'
};

user.hobbies = ['Anime', 'Coding', 'Dating', 'Gaming'];
//check to see if theyre gold member

user.isGoldMember = true;

console.log(user.hobbies);

console.log(user);
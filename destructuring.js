/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                    Object Destructuring
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                
*/

// Add 1 value at a time
var user = {};
user.firstName = "firstName";
console.log(
  "🚀 ~ file: destructuring.js ~ line 10 ~ user.firstName",
  user.firstName,
);
user.lastName = "lastName";
console.log(
  "🚀 ~ file: destructuring.js ~ line 12 ~ user.lastName",
  user.lastName,
);
user.location = "location";
console.log(
  "🚀 ~ file: destructuring.js ~ line 14 ~ user.location",
  user.location,
);

// Extract 1 value at a time:
var firstName = user.firstName;
console.log("🚀 ~ file: destructuring.js ~ line 18 ~ firstName", firstName);
var lastName = user.lastName;
console.log("🚀 ~ file: destructuring.js ~ line 20 ~ lastName", lastName);
var location = user.location;
console.log("🚀 ~ file: destructuring.js ~ line 22 ~ location", location);

// => Add multiple values at a time:
// Javascript Object literal notation
user = {
  firstName: "firstName",
  lastName: "lastName",
  location: "location",
};

// => Extract multiple values at a time: destructuring
var { firstName, lastName, location } = user;
console.log("🚀 ~ file: destructuring.js ~ line 35 ~ location", location);
console.log("🚀 ~ file: destructuring.js ~ line 35 ~ lastName", lastName);
console.log("🚀 ~ file: destructuring.js ~ line 35 ~ firstName", firstName);

// Mnemonics:
// Add: assign to the right of "="
// Extract from the left of "="

// Destructure result of function invocation:
function getUser() {
  return {
    firstName: "firstName",
    lastName: "lastName",
    location: "location",
  };
}

var { firstName, lastName, location } = getUser();
console.log("🚀 ~ file: destructuring.js ~ line 61 ~ location", location);
console.log("🚀 ~ file: destructuring.js ~ line 61 ~ lastName", lastName);
console.log("🚀 ~ file: destructuring.js ~ line 61 ~ firstName", firstName);

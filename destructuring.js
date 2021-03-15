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

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                    Array Destructuring
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                
*/
// array notation
var user = ["firstName", "lastName", "location"];
var firstName = user[0];
console.log("🚀 ~ file: destructuring.js ~ line 73 ~ firstName", firstName);
var lastName = user[1];
console.log("🚀 ~ file: destructuring.js ~ line 75 ~ lastName", lastName);
var location = user[2];
console.log("🚀 ~ file: destructuring.js ~ line 76 ~ location", location);

// array destructing: same outcome
var user = ["firstName", "lastName", "location"];
var [firstName, lastName, location] = user;
console.log("🚀 ~ file: destructuring.js ~ line 80 ~ location", location);
console.log("🚀 ~ file: destructuring.js ~ line 80 ~ lastName", lastName);
console.log("🚀 ~ file: destructuring.js ~ line 80 ~ firstName", firstName);

var csv = "a, b, c, d, e";
var [field1, field2, field3, field4, field5] = csv.split(",");
console.log("🚀 ~ file: destructuring.js ~ line 88 ~ field1", field1);
console.log("🚀 ~ file: destructuring.js ~ line 88 ~ field2", field2);
console.log("🚀 ~ file: destructuring.js ~ line 88 ~ field3", field3);
console.log("🚀 ~ file: destructuring.js ~ line 88 ~ field4", field4);
console.log("🚀 ~ file: destructuring.js ~ line 88 ~ field5", field5);

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    Destructuring: Renaming poorly named object properties
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                
*/

var user = {
  fn: "firstName",
  ln: "lastName",
  l: "location",
};

var { fn: firstName, ln: lastName, l: location } = user;
console.log("🚀 ~ file: destructuring.js ~ line 107 ~ firstName", firstName);
console.log("🚀 ~ file: destructuring.js ~ line 107 ~ lastName", lastName);
console.log("🚀 ~ file: destructuring.js ~ line 107 ~ location", location);

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    Destructuring: Function parameters
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                
*/
// Avoid having to worry about parameters ordering:

function fetchStuff(arg1, arg2, arg3, arg4, arg5) {
  pass;
}

fetchStuff("arg1", 100, new Date("01/01/2021").getTime(), null, NaN);

// vs passing an object to be destructured
function fetchStuff({ arg1, arg2, arg3, arg4, arg5 }) {
  pass;
}

fetchStuff({
  arg1: null, // argument not caring about
  arg2: null, // argument not caring about
  arg3: new Date("01/01/2021").getTime(),
  arg4: null,
  arg5: NaN,
});

// Handling arguments we don't care about
function fetchStuff({ arg1, arg2, arg3, arg4, arg5 }) {
  pass;
}

fetchStuff({
  arg3: new Date("01/01/2021").getTime(),
  arg4: null,
  arg5: NaN,
});

//   => set default values
function fetchStuff({ arg1, arg2, arg3, arg4, arg5 }) {
  arg1 = arg1 || "default value";
  arg2 = arg2 || "default value";
  arg3 = arg3 || "default value";
  arg4 = arg4 || "default value";
  arg5 = arg5 || "default value";
}

// with destructuring:
function fetchStuff({
  arg1 = "default value",
  arg2 = "default value",
  arg3 = "default value",
  arg4 = "default value",
  arg5 = "default value",
}) {}

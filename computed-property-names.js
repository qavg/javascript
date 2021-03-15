/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                    Computed Property Names

Have an expression be computed as a property name on an object
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                
*/

// old way:
function objectify(key, value) {
  let obj = {};
  obj[key] = value;
  return obj;
}

// using computed property name
function objectify(key, value) {
  // return new object with object notation
  return {
    // whatever arg "key" represents will be added as property's key in [key]
    [key]: value,
  };
}

objectify("name", "first last");
console.log(
  '🚀 ~ file: computed-property-names.js ~ line 25 ~ objectify("name", "first last")',
  objectify("name", "first last"),
);

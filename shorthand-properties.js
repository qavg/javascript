/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                            Shorthand Property Name: Concise Objects
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                
*/

function formatMessage(name, id, avatar) {
  return {
    name: name,
    id: id,
    avatar: avatar,
    timeStamp: Date.now(),
  };
}

// Remove property name if property's key = value
function formatMessage(name, id, avatar) {
  return {
    name,
    id,
    avatar,
    timeStamp: Date.now(),
  };
}

// What about methods ?
function formatMessage(name, id, avatar) {
  return {
    name,
    id,
    avatar,
    timeStamp: Date.now(),
    save: function () {
      // function expression
      pass;
    },
  };
}

//   Remove function keyword
function formatMessage(name, id, avatar) {
  return {
    name,
    id,
    avatar,
    timeStamp: Date.now(),
    save() {
      // function keyword removed
      pass;
    },
  };
}

// Moving the names into a separate file or module

// Local variable
const secret = "Secret code"; // We might not want this to be accessed

// Shared variables
const john = "John";
const peter = "Peter";
// When using modules, each file/module's information can be accessed by calling the module global object, when we console.log this, we see an object with different values, the exports value shows us what information is currently being exported outside of this module to the rest of the application

module.exports = { john, peter };

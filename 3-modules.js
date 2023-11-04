// Modules - Encapsulated code that will only share the minimum
// Every File in node is considered a module by default

// Need require statements to import module exports
const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

sayHi(peter);

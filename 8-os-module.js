// OS Module -- interacting with os and server

const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// update to return uptime of system in seconds
console.log(`Uptime = ${os.uptime()}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);

const os = require("os")

// info about the current user
const user = os.userInfo();
console.log(user);
//method rturn the system uptime
console.log(`the system is runnning for ${os.uptime()} in seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(currentOs);
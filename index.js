// // Assingment 2:
// // index.js

// // The first two elements in process.argv are the Node.js executable and the script file path.
// // Actual command line arguments start from index 2.
// // const args = process.argv.slice(2);
// const args = process.argv;

// console.log('Command line arguments:', args);

// // Now you can use args[0], args[1], etc., in your program.

////////////////////////////

// //Assignment 5
// // index.js

// const { exec } = require("child_process");
// const { stderr } = require("process");

// exec("dir", (err, stdout, stderr) => {
//     if (err) {
//         console.log(`There is some error : ${err.message}`);
//         return;
//     }
//     console.log(`The folowing info was found : ${stdout}`);
// })

/////////////////////////////
// Assignment 3 : Understanding OS module

// os_info.js

// Import the 'os' module, which is built into Node.js and provides information about the operating system.
const os = require('os');

// Print the operating system platform (e.g., 'win32', 'linux', 'darwin' for Windows, Linux, and macOS).
console.log('Platform:', os.platform());

// Print the CPU architecture (e.g., 'x64', 'arm' for 64-bit and ARM architectures).
console.log('Architecture:', os.arch());

// Print information about CPUs, such as their model, speed, and usage.
console.log('CPUs:', os.cpus());

// Print the total system memory in bytes.
console.log('Total Memory:', os.totalmem());

// Print the free system memory in bytes.
console.log('Free Memory:', os.freemem());

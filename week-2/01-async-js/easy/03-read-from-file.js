const fs = require("fs");

// fs.readFile("./a.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error");
//   } else {
//     console.log(data);
//   }
// });

// or
fs.readFile("./a.txt", "utf-8", function(err, data){
    if (err) {
      console.log("Error");
    } else {
      console.log(data);
    }
  });

// expensive operation
let a=0;
for (let i = 0; i < 3000000000; i++) {
    a+=i   
}
console.log()
const fs = require("fs");

// fs.readFile("./a.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error");
//   } else {
//     console.log(data);
//   }
// });

// or
data="Hello I am under the water"
fs.writeFile("./b.txt",data, function(err){
    if (err) {
      console.log("Error");
    } else {
      console.log("Success");
    }
  });

// expensive operation
let a=0;
for (let i = 0; i < 10000000000; i++) {
    a+=i   
}
console.log()
// const fs = require("fs");

// fs.readFile("./a.txt", "utf-8", function (err, data) {
//   if (err) {
//     console.log("Error");
//   } else {
//     const parts = data.split(/\s+/);
//     let data_modified = parts.join(" ");
//     console.log(data_modified);
//     fs.writeFile("./a.txt", data_modified, function (err) {
//       if (err) {
//         console.log("Error");
//     } else {
//         // write the data back to file
//         console.log("Success");
//       }
//     });
//   }
// });




// other method by Harsh Dave
const fs = require('fs');

fs.readFile("../temp.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error.message);
    } else {
        data = data.replace(/\s+/g, " ")
        writeNewStr(data);
    }
})


function writeNewStr(data) {
    fs.writeFile("../temp.txt", data, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Sucesss");
        }
    })
}
// function clock_printsOnNewLine() {
//   setInterval(function () {
//     let date = new Date();
//     let hour = date.getHours();
//     console.log(hour + " : " + date.getMinutes() + " : " + date.getSeconds());
//   }, 1000);
// }
// clock();





function clock_with_milliseconds_printsOnSameLine() {
    setInterval(function () {
        let date = new Date();
        let hour = date.getHours();
        let timeString = hour + " : " + date.getMinutes() + " : " + date.getSeconds()+" : "+date.getMilliseconds();
        process.stdout.write('\r' + timeString);
    }, 1);
}

clock();

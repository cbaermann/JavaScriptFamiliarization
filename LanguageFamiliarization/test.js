
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// readline.question('Please enter your name: ', (name) => {
//     console.log(`Hello ${name}.`);
//     readline.close();
// });

// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hey it works');
// }).listen(8080);

// console.log('Click -> http://localhost:8080');

//      Returns sum of numbers up to specified number (n)
// function sumNumbers(n){
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum += i;
//     }
//     return sum;
// }

//      Same as previous function but faster (Time complexity)
// function sumNumbers(n){
//     return n*(n+1)/2
// }

// console.log(sumNumbers(1000000));


//Interval counter to display console.log per interval
let counter = 1;
let interval = setInterval(function () {
    if(counter > 5 ){
        clearInterval(interval);
        return;
    }
    console.log("Hello " + counter);
    counter++
    
}, 1000);

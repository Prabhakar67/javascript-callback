// Synchronous callback 



function Sum(a, b) { // callback function for addition
    console.log(`addition of ${a} and ${b} is ${a + b}`);
    console.log('this is callback function for addition');
}

function Sub(a, b) { // callback function for subtraction
    console.log(`subtraction of ${a} and ${b} is ${a - b}`);
    console.log('this is callback function for subtraction');
}

function getResult(callback, a, b) {  // main function
    callback(a, b);
    console.log('This is main function');
}

getResult(Sum, 10, 8); // passing one function as argument/param to another function 





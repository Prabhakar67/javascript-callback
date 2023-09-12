// Synchronous callback 

function Sum(a, b) { // callback function for addition
    console.log(`addition of ${a} and ${b} is ${a + b}`);
    console.log('this is callback function for addition');
}

function Sub(a, b) { // callback function for subtraction
    console.log(`subtraction of ${a} and ${b} is ${a - b}`);
    console.log('this is callback function subtraction');
}

function Operation(action, a, b) {  // main function
    action(a, b);
    console.log('This is main function');
}

Operation(Sub, 10, 8); // passing one function as argument/param to another function 

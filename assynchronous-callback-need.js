// Asynchronous callback - this is problem statement

let arr = ['Prabhakar', 'Shubham', 'Akshay'];
console.log('this is main array', arr);

// let say this function pushes/writes something on server, taking 4 sec for that 
function setArray() {
    setTimeout(() => {
        console.log('this is main function (delay 4 sec)');
        arr.push('Ajit');
        console.log(`'Ajit' is pushed into arr`);
    }, 4000);
}

// let say this function fetches the array from server taking 1.5 sec
function getArray() {
    setTimeout(() => {
        console.log('this is callback function (delay 2 sec)');
        console.log('this is modified array', arr);
    }, 1500);
}

getArray();
setArray();




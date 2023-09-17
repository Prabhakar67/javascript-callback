// promises

let arr = ['Prabhakar', 'Shubham', 'Akshay'];
console.log('this is main array', arr);

let myPromise = new Promise(function (resolve, reject) {

    // this is equivalent to main function
    // let say this function pushes/writes something on server, taking 4 sec for that 
    setTimeout(() => {
        console.log('this is producing code (delay 4 sec)');
        arr.push('Ajit');
        console.log(`'Ajit' is pushed into arr`);
        resolve();
    }, 4000);
})

myPromise.then(handlefulfilled, handlerejected);

// this is equivalent to callback function
// let say this function fetches the array from server taking 1.5 sec
function handlefulfilled() {
    console.log('promise is now resolved');

    setTimeout(() => {
        console.log('this is consuming code (delay 1.5 sec)');
        console.log('this is modified array', arr);
    }, 1500);

}

function handlerejected() {
    console.log('promise rejected');
}
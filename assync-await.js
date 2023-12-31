let arr = ['Prabhakar', 'Shubham', 'Akshay'];
console.log('this is main array', arr);

async function myAsyncFunc() {
    let myPromise = new Promise(function abc(resolve, reject) {
        setTimeout(() => {
            console.log('this is producing code (delay 9 sec)');
            arr.push('Ajit');
            console.log(`'Ajit' is pushed into arr`);
            if (arr.length == 4) {
                resolve();
            } else {
                reject();
            }
        }, 9000);
    })

    let myPromise2 = new Promise(function xyz(resolve, reject) {
        setTimeout(() => {
            resolve('myPromise2 is resolved - independent promise with delay 4 sec');
        }, 4000);

    });

    await myPromise;
    let data = await myPromise2;
    console.log(data);

    console.log('promise is now resolved (haulted block of code resumed)');
    setTimeout(() => {
        console.log('this is consuming code (delay 3 sec)');
        console.log('this is modified array', arr);
    }, 3000);
}

myAsyncFunc();


// myPromise.then(handlefulfilled, handlerejected).catch(handlerejected);

// // this is equivalent to callback function
// // let say this function fetches the array from server taking 1.5 sec
// function handlefulfilled() {
//     console.log('promise is now resolved');
//     setTimeout(() => {
//         console.log('this is consuming code (delay 1.5 sec)');
//         console.log('this is modified array', arr);
//     }, 1500);

// }

// function handlerejected() {
//     console.error(`promise rejected: number of elements in array is ${arr.length} `);
// }
for (let i = 0; i < 10; i++) {

    let myPromise;
    if (i > 5) {
        myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(i)
            }, Math.floor(Math.random() * 500 + 1))

        });
    } else {
        myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(i)
            }, Math.floor(Math.random() * 500 + 1))

        });
    }
    myPromise.then((value) => {
        console.log('ID' + ' ' + value);
    }, (value) => {
        console.log("greska" + " " + value);
    });

}

//for (let i = 0; i < 10; i++) {
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(i)
//     }, Math.floor(Math.random() * 500 + 1))

//     setTimeout(() => {
//         reject(i)
//     }, Math.floor(Math.random() * 500 + 1))

// });
// myPromise.then((value) => {
//     console.log('ID' + ' ' + value);
// }, (value) => {
//     console.log("greska" + " " + value);
// });
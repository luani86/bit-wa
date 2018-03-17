// for (let i = 0; i < 100; i++){
//     const myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(i)
//         }, Math.floor(Math.random(500) + 1))
//         reject(i)
//     }, Math.floor(Math.random(500) + 1))
// };

// myPromise.then ((value) => {
// console.log("ID " + ne Date());
// }, (value) => {
//     console.log("Greska " + value)
// });
let promiseArray = [];

for(let i = 0; i < 100; i++) {
    const myPromise = new Promise((resolve, reject) => {
        // myPromise.then(new Date())
        setTimeout(
            resolve(i), Math.floor(Math.random()+500)
        )
    }).then(function (params) {
        console.log(params);
        return params;
        
    });
    promiseArray.push(myPromise);
}


Promise.all(promiseArray).then(function (params) {
    console.log(params);
});



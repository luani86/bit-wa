// 0 sample promise that resolves to current date
const myPromise = Promise.resolve(new Date());
myPromise.then((value) => {
    console.log(value)
});

// 1 console app
promiseArray = [];
for (i = 0; i < 10; i++){
    ourPromise = new Promise((resolve, reject) => {
        let delay = Math.floor(Math.random() * 100);
        setTimeout(
            resolve(delay), delay
        )
    }).then((params) => {
        return params;
    })
    promiseArray.push(ourPromise);
}

// prints all the promises and the message
Promise.all(promiseArray).then((params) => {
    console.log(params + "\n" + " All promises are completed");
});

//2 prints only the first promise
Promise.race(promiseArray).then((params) => {
    console.log(params);
});
for (let i = 0; i < 10; i++) {
 const myPromise = new Promise((resolve, reject) => {
     setTimeout(() => {
         resolve(i)
     }, Math.floor(Math.random() * 500 + 1))

     setTimeout(() => {
        reject(i)
     }, Math.floor(Math.random() * 500 + 1))

 });
 myPromise.then((value) => {
     console.log('ID' + ' ' + value);
 }, (value) => {
     console.log("greska" + " " + value);
 });
}
// ? promises in js

let pr = new Promise(function (res, rej) {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    rn < 5
      ? res("Value rejected with " + rn)
      : rej("Value resloved with " + rn);
  }, 3000);
});

pr.then(function (val) {
  console.log(val);
}).catch(function (val) {
  console.log(val);
});

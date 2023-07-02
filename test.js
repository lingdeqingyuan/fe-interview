setTimeout (() => {
  console.log(100);
})

console.log(200);

new Promise(() => {
  console.log(300);
  throw new Error();
}).then(() => {
  console.log(400)
}).catch(() => {
  console.log(500)
}).then(() => {
  console.log(600);
})

// 200 300 500 600 100
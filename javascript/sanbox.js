// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value!");
//   }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value 2!");
//   }, 20000);
// });

// async function handlePromise() {
//   console.log("Hello World!");

//   const val = await p1;
//   console.log("Namaste JS");
//   console.log(val);

//   const val2 = await p2;
//   console.log("Namaste JS 2");
//   console.log(val2);
// }

// handlePromise();
// function calc(arr, msg) {
//   arr[1] = 150;
//   msg = "inside";
//   console.log(arr[0] + arr[1]);
//   console.log(msg);
// }

// const arr = [100];
// let msg = "oputside";
// calc(arr, msg);
// console.log(arr[0] + arr[1]);
// console.log(msg);

// function math(oper, x) {
//   const operations = {
//     "*": (a, b) => a * b,
//     "/": (a, b) => a / b,
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b,
//   };

//   return function (y) {
//     return operations[oper](x, y);
//   };
// }

// const mul = math("*", 5);
// const add = math("+", mul(2));

// console.log(typeof add);
// console.log(add(math("-", 25)(20)));

// function foo(a) {
//   let returnValue = "";

//   try {
//     if (a === "bar") {
//       throw new Error("qux");
//     }
//     returnValue = "try";
//   } catch (error) {
//     returnValue = "catch";
//   } finally {
//     returnValue = "finally";
//   }

//   return returnValue;
// }

// console.log(foo("bar"));
// console.log(foo("zzz"));

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("prom");
//   }, 1000);

//   setTimeout(() => {
//     reject(new Error("!prom"));
//   }, 5000);
// });

// p.then((arg) => {
//   console.log(arg);

//   return new Promise((resolve, reject) => {
//     reject(new Error("!arg"));
//   }).catch((e) => {
//     console.log(e.message);
//   });
// }).catch((e) => {
//   console.log(e.message);
// });

function extractHiddenUrl() {
  // Find all <i> elements with class "char"
  const charElements = document.querySelectorAll("i.char");

  // Extract the 'value' attribute from each element and join them to form the URL
  let hiddenUrl = "";
  charElements.forEach((element) => {
    hiddenUrl += element.getAttribute("value");
  });

  return hiddenUrl;
}

// Call the function and log the result
const hiddenUrl = extractHiddenUrl();
console.log(hiddenUrl); // Output the hidden URL

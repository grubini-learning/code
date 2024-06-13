# Promises

Javascript object that links "producing code" and the "consuming code".
Object that represents eventual completion of an async operation

## Anatomy

### Promise statuses

- pending - initial state
- rejected - operation failed
- fulfilled - operation was completed

### Promise result

Stores the data that returns. Comes in the form of a ReadableStream that is immutable.

### Consumers

Consuming functions can be subscribed using the methods `.then()` / `.catch()`

#### then

```js
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise.then(
  (result) => {
    /* handles a successful result */
  },
  (error) => {
    /* handles an error, and runs when a promise is rejected */
  }
);
```

#### catch

Function that is interested in errors

```js
// we can only use .catch or the error function at a time and it will prioritize the error function if both are provided
promise.then((result) => {}).catch((error) => {});
```

### finally

function that always runs when the promise is settled with an error or a success. The idea here is to perform any cleanup/finalizing steps after previous operations are complete

```js
new Promise((resolve, reject) => {
    // do something that takes time
})
.finally(() => stop loading indicator)
.then(result => show the result, err => show error)

or

new Promise((resolve, reject) => {
  throw new Error("error");
})
  .finally(() => alert("Promise ready")) // triggers first
  .catch(err => alert(err));  // <-- .catch shows the error
```

### Promise chaining

```js
const promise = createOrder(cart);

promise
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((_) => updateWallet());
```

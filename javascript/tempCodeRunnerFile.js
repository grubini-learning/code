let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise.then(
  (result) => {
    /* handles a successful result */
  },
  (error) => {
    /* handles an error, and runs when a promise is rejected */
    console.log("let me see the error: ", error);
  }
);

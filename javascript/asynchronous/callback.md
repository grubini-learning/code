# Callback

A function argument that executes when another action is completed.
Reasons for doing this might be:

- resource dependency
- chronological order of operations
- give an external source the control of what gets executed at a specific time

**Example**

```js
function loadScript(src, callback) {
  let script = document.createElement("script");

  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript(
  "https://cdnks.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
  (script) => {
    alert(`Cool, the script ${script.src} is loaded`);
    alert(_); // _ is a function declared in the loaded script
  }
);
```

## Pyramid of Doom / Callback hell and Inversion Control

When calls become more nested and the code becomes deeper and increasingly more difficult to manage, especially if we have more loops, conditional statements, etc.

```js
// Here we try to show a callback hell by illustrating the concept with an e-commerce application and the series of steps that need to happen that are dependent on the previous

// We also relinquish control of when a function gets executed and give the control to the function the callback is placed in

const cart = ["shoes", "pant", "shirts"];

api.createOrder(cart, () => {
  api.proceedToPayment(() => {
    api.showOrderSummary() => {
      api.updateWallet()
    }
  })
})
```

# Async/Await

## What is async

## output

- Always returns a promise
- if we return a value, the function will wrap it in a promise and return it

```js
async function getData() {}

or;

const getData = async () => {};

const dataPromise = getData().then((res) => console.log(res));
```

## What is await

Keyword that can only be used in an `async` function to halt execution until the promise returns

## How async await works behind the scenes

The `await` keyword makes the order of execution wait until the promise resolves

## Examples

## Error handling

## Interviews

## Async/Await vs Promises

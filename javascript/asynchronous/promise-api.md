# Promise API

When we start making parallel API calls

## Promise.all

**fail fast**
Used to make parallel API calls. It will wait for all promises to finish.

### input

array of promises that represents the parallel API calls

### output

- success case: returns array of all the results

```js
Promise.all([p1, p2, p3]);

const breeds = await Promise.all(
  names.map(async (name) => {
    const res = await fetch(`${BASE_URL}/breed/${name}/images/random`);
    const data = await res.json();

    return { name, picture: data.message };
  })
);

let names = ["iliakan", "remy", "jeresig"];

let requests = names.map((name) =>
  fetch(`https://api.github.com/users/${name}`)
);

Promise.all(requests)
  .then((responses) => {
    // all responses are resolved successfully
    for (let response of responses) {
      alert(`${response.url}: ${response.status}`); // shows 200 for every url
    }

    return responses;
  })
  // map array of responses into an array of response.json() to read their content
  .then((responses) => Promise.all(responses.map((r) => r.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then((users) => users.forEach((user) => alert(user.name)));
```

- rejected case: if any promise gets rejected it throws an error for all the promises

```js
Promise.all([p1, p2, p3]).catch((e) => console.log("error: ", e));
```

## Promise.allSettled

If you want the result of the promises, no matter if they are an error or not

```js
Promise.allSettled([p1, p2, p3]).catch((e) => console.log("error: ", e));
```

### input

array of promises that represents the parallel API calls

### output

```js
[val1, error2, val3];
```

## Promise.race

The promise who gets settled first will be the winner

```js
Promise.race([p1, p2, p3]);
```

### input

array of promises that represents the parallel API calls

### output

```js
error3;
```

## Promise.any

**success seeking**
The promise who gets resolved, (success), first will be the winner

```js
Promise.any([p1, p2, p3]);
```

### input

array of promises that represents the parallel API calls

### output

```js
successP1;
```

- what if everything fails

```js
errors.errors = [errorp1, errorp2, errorp3];
```

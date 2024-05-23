type Timeout = ReturnType<typeof setTimeout>;

export const debounce = (fn: (item: any) => void, delay = 500) => {
  let timer: Timeout;
  let words: string[] = [];

  return (...args: any) => {
    clearTimeout(timer);
    words = [...words, ...args];

    timer = setTimeout(() => {
      const phrase = words.join(" ");

      fn.call(this, phrase);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  };
};

const search = (word: string) => {
  console.log("Searched for: ", word);
};

const debounceFn = debounce(search, 1000);
debounceFn("Hey ");
setTimeout(() => {
  debounceFn("my name is ");
}, 500);
debounceFn("Giovani");

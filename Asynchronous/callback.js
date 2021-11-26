const addSum = (a, b, callback) => {
  setTimeout(() => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return callback('a, b must be numbers');
    }
    callback(undefined, a + b);
  }, 2000);
};

let callback = (err1, sum1) => {
  if (err1) return console.log({ err1 });
  console.log({ sum1 });
  addSum(
    sum1,
    15,
    (callback = (err2, sum2) => {
      if (err2) return console.log({ err2 });
      console.log({ sum2 });
    }),
  );
};

addSum(10, 20, (err1, sum1) => {
  if (err1) return console.log({ err1 });
  console.log({ sum1 });
  addSum(sum1, 15, (err2, sum2) => {
    if (err2) return console.log({ err2 });
    console.log({ sum2 });
  });
});

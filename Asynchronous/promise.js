//* resolve: 성공했을 때 사용
//* reject: 실패했을 때 사용

const addSum = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        reject('a, b must be numbers');
      }
      resolve(a + b);
    }, 2000);
  });
};

addSum(10, 20)
  .then(sum1 => addSum(sum1, 15))
  .then(sum2 => console.log({ sum2 }))
  .catch(err => console.log({ err }));

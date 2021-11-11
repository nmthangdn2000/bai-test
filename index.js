const a = ['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'];
function allLongestStrings(inputArray) {
  const b = inputArray.sort()[inputArray.length - 1];
  const arr = [];
  inputArray.forEach((e) => {
    if (e.length === b.length) arr.push(e);
  });
  return arr;
}
console.log(allLongestStrings(a));

const c = [60, 40, 55, 75, 64];
const arr1 = [];
const arr2 = [];
function alternatingSums(a) {
  const c = [60, 40, 55, 75, 64];
  for (let i = 0; i < c.length; i++) {
    if (i % 2 === 0) arr1.push(c[i]);
    else arr2.push(c[i]);
  }
  const result = [];
  let sum = 0;
  arr1.forEach((e) => {
    sum += e;
  });
  result.push(sum);
  sum = 0;
  arr2.forEach((e) => {
    sum += e;
  });
  result.push(sum);
  return result;
}
console.log(alternatingSums(c));

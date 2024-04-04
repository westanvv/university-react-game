const memo = {};

function add(a, b) {
  if (memo.hasOwnProperty(`${a}-${b}`)) {
    return memo[`${a}-${b}`];
  }

  const res = a + b;
  memo[`${a}-${b}`] = res;

  return res;
}

// function culc(a, b) {
//   return a + b;
// }
//
// const c = 1;
//
// const b = [1, 2];
//
// const key = 'test';
//
// const obj1 = {
//   1: 1,
//   ab: 1,
//   culc1: (a, b) => a + b,
//   culc2(a, b) {
//     return a + b;
//   },
//   culc,
//   arr: [0, 1, 2, 3],
// };
// //
// // a[culc(1, 100)] = 11;
// //
// // const obj1 = {
// //   a: 1,
// //   b: 2,
// // };
// //
// // const obj2 = {
// //   a: 6,
// //   c: 3,
// // };
// //
// // const obj3 = {
// //   ...obj2,
// //   ...obj1,
// // };
// //
// // // const obj3 = obj1;
// //
// // console.log(obj3);
//
// // console.log(Object.entries(a));
// //
// // Object.keys(a).forEach(key => {
// //   console.log(a[key]);
// // });
//
// const arr1 = ['a', 'b', 'c'];
// const arr2 = [...arr1];
//
// // for (let i = 0; i < arr1.length; i++) {
// //   console.log(arr1[i]);
// // }
// //
// // for (const item of arr2) {
// //   console.log(item);
// // }
// //
// // for (const key in arr2) {
// //   console.log(key);
// // }
//
// // arr1.forEach((item, index) => {
// //   console.log(index, item);
// // });
//
// const arrMap = arr1.map(item => item + 1);
//
// const arrFilter = arr1.filter((item, index) => index % 2 === 0);
//
// const arrFind = arr1.find((item, index) => index % 2 === 0);
//
// const arrSome = arr1.some((item, index) => index % 2 === 0);
//
// const arrReduce = [1, 4, 5].reduce((sum, curr) => sum + curr, 0);
//
// // console.log(obj1.arr2 ? obj1.arr2[100] : 'none');
// // console.log(obj1.arr2 && obj1.arr2[100]);
// console.log(obj1.arr2?.[100]);

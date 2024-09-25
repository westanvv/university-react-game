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

// ----------------
const getFromAPI = (userId, callback) => {
  fetch('http://eventregistry.org/api/v1/article/getArticles?apiKey=f234c7ef-33a4-47c4-9f38-0d31451a5824')
    .then(data => data.json())
    .then(data => {
      callback({id: 1, name: 'ubaser'});
    });
};

const openModal = (data, okCallback, cancelCallback) => {
  okCallback(data);
};

const sendToAPI = (data, callback) => {
  callback(data);
};

// getFromAPI(1000, data => {
//   openModal(
//     data,
//     modalData => {
//       sendToAPI(modalData, sendData => {
//         console.log('done', sendData);
//       });
//     },
//     () => {
//       console.log('cancel');
//     }
//   );
// });

const getFromAPI2 = userId => {
  return fetch('http://eventregistry.org/api/v1/article/getArticles?apiKey=f234c7ef-33a4-47c4-9f38-0d31451a5824')
    .then(data => data.json())
    .then(data => {
      return {id: 1, name: 'ubaser'};
    });
};

const openModal2 = data => {
  return new Promise((resolve, reject) => {
    //
    resolve(data);
  });
};

const sendToAPI2 = data => {
  return new Promise((resolve, reject) => {
    // send
    resolve(data);
  });
};

// console.log(1);
//
// getFromAPI2(1000)
//   .then(data => {
//     return openModal2(data);
//   })
//   .then(data => {
//     return sendToAPI2(data);
//   })
//   .then(data => {
//     console.log('done', data);
//   })
//   .finally(() => {
//     // close modal
//   });
//
// console.log(2);

//
const sleep = time => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('wake up');
      resolve();
    }, time);
  });
};

// // sleep(2000, () => {
// //   sleep(2000, () => {
// //     sleep(2000, () => {
// //       sleep(2000, () => {
// //         sleep(2000, () => {
// //           sleep(2000, () => {
// //             console.log('prepare');
// //           });
// //         });
// //       });
// //     });
// //   });
// // });
//

const test2 = async () => {
  const data = await getFromAPI2(1000);
  const dataModal = await openModal2(data);
  const result = await sendToAPI2(dataModal);
  console.log('done', result);
};

// test2();

(async () => {
  await sleep(2000);

  async function test() {
    console.log(1);

    await sleep(2000);
    await sleep(2000);
    await sleep(2000);

    const [resp1, resp2] = await Promise.all([getFromAPI2(1000), getFromAPI2(11)]);

    console.log(2);
  }
})();

(() => {})();

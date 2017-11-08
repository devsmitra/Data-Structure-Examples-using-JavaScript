// const Stack = require('./Stack');

// const stack = new Stack(4);
// // const queue = new Stack(4);

// stack.push(1);
// stack.push(2);
// // stack.push(3);
// // stack.push(4);


// // let length = stack.length;
// // let temp = stack.pop();

// // queue.push(temp);
// // while (length !== 0) {
// //   temp = stack.pop();
// //   queue.push(temp);
// //   length = stack.length;
// // }

// // console.log(stack.length);
// // console.log(queue.length);


// //  [1,2]
// var queue = (value) => {
//   const data = stack.pop(); // 2 1
//   if (stack.length !== 0) {
//     queue(data);
//     console.log('if', data);
//     return data;
//   }
//   // stack.push(data);
//   console.log('else', data); // 1
//   return data; // 3, 2, 1
// }

// queue(); // 4
const sort = (array) => {
  for (let i = 0; i < array.length - 1; i++) { // n-1
    let status = true; // 1
    for (let j = 0; j < array.length - i; j++) { // n-1(n)
      if (array[j] > array[j + 1]) { // 1
        let temp = array[j]; // 1 
        array[j] = array[j + 1]; // 1
        array[j + 1] = temp; // 1
        status = false; // 1
      }
    }
    if (status) { //1
      break; //1
    }
  }
};
module.exports = sort;

const array = [9, 8, 7, 5, 6, 4, 3, 2, 1];
sort(array);
console.log(array);
/* 
  Worst:n +(n-1) n + c      c is some constant
  = n +n^2 -n
  = n^2 <=>O (N^2)

  Best: O(n)

*/
const sort = (array) => {
  for (let j = 1; j < array.length; j++) { // n-1
    if (array[j - 1] > array[j]) {
      let temp1 = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp1;
      for (let k = j - 1; k > 0; k--) { // (n-1)n
        if (array[k - 1] > array[k]) {
          const temp = array[k];
          array[k] = array[k - 1];
          array[k - 1] = temp;
        }
      }
    }
  }
};

const array = [7, 4, 5, 2];
sort(array);
console.log(array);

/* 
  Worst:n +(n-1) n + C      C is some constant
  = n +n^2 -n
  = n^2 <=>O (N^2)

  Best: O(n)

*/
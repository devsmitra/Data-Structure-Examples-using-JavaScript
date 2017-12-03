const sort = (array) => {
  for (let i = 0; i < array.length - 1; i++) { // n-1
    let index = i, // 1
      status = true, // 1
      temp = array[i]; // 1
    for (let j = i + 1; j < array.length; j++) { // (n-1)(n-1)
      if (temp > array[j]) { // 1
        temp = array[j]; // 1
        index = j; //1
        status = false; //1
      }
    }
    if (status) { //1
      break; //1
    } else {
      array[index] = array[i]; //1
      array[i] = temp; // 1
    }
  }
};

const array = [9, 8, 7, 5, 6, 4, 3, 2, 1];
sort(array);
console.log(array);


/* 
  Worst:(n-1) +(n-1) n + c      c is some constant
  = n + n^2 -n +c
  = n^2 <=> O (N^2)

  Best: O(n)

*/
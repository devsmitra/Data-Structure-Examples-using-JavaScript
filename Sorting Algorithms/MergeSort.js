const mergeSort = (array) => {
    if (array.length < 2) {
        return array;
    }

    const pivot = Math.floor(array.length / 2);
    const right = array.splice(0, pivot);
    const left = array;
    return sort(mergeSort(left), mergeSort(right));
};

const sort = (left = [], right = []) => {
    let leftIndex = 0,
        rightIndex = 0;
    const sorted = [];
    while (left && left.length !== 0 && right && right.length !== 0) {
        if (left[0] > right[0]) {
            sorted.push(right[0]);
            right.splice(0, 1);
        } else {
            sorted.push(left[0]);
            left.splice(0, 1);
        }
    }

    while (left && left.length !== 0) {
        sorted.push(left[0]);
        left.splice(0, 1);
    }

    while (right && right.length !== 0) {
        sorted.push(right[0]);
        right.splice(0, 1);
    }
    return sorted;
};

const array = [9, 8, 7, 5, 6, 4, 3, 2, 1];
console.log(mergeSort(array));


/* 
  Worst: Ο(n log n)
  Best: O(n log n)
*/
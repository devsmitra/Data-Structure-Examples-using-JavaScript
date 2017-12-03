const quickSort = (array, start, end) => { // t(n)
    if (start < end) {
        const q = partition(array, start, end); // n
        quickSort(array, start, q - 1); // t(n/2) or t(0)
        quickSort(array, q + 1, end); // t(n/2) or t(n-1)
    }
};

const partition = (array, start, end) => {
    let temp1 = start,
        temp2 = array[end];

    for (let index = start; index < end; index++) {
        const element = array[index];
        if (element < temp2) {
            array[index] = array[temp1];
            array[temp1] = element;
            temp1++;
        }
    }
    array[end] = array[temp1];
    array[temp1] = temp2;
    return temp1;
};

const array = [9, 8, 7, 6, 5, 4, 3, 2, 1];
quickSort(array, 0, array.length - 1);
console.log(array);
/* 
Time Complexity
Best: O(n log n)
    t(n) = O(n)+ 2 * t(n/2)
    = O(n logn)
Space = O(logn)

or

Worst: Ο(n^2)
    t(n)= O(n) + t(0) + t(n-1)
        = O(n) + t(n-2) + O(n-1)
        = t(n-3) + c*n // (O(n)+O(n-1)...)
        = O(n^2)
Space = O(n)
*/
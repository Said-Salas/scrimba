const mergeSort = array => {
    if(array.length <= 1) {
        return array
    }
}

const findMidPoint = array => {
    const midPointIndex = Math.floor(array.length / 2)
    return midPointIndex
}

// console.log(findMidPoint([1,2,3]))

const splitArray = array => {
    const midPoint = Math.floor(array.length / 2)
    const leftHalf = array.slice(0, midPoint)
    const rightHalf = array.slice(midPoint, array.length)

    return [leftHalf, rightHalf]
}

// console.log(splitArray([1, 2, 3, 4, 5]))

const sortArray = array => {
    for (let i = 0; i < array.length; i++) {
        for (let m = 0; m < array.length - 1; m++) {
            if (array[m] > array[m + 1]) {
                const temp = array[m]
                array[m] = array[m + 1]
                array[m + 1] = temp
            }
        }
    }
    return array
}

// console.log(sortArray([4, 1, -2, 0]))

const halveSortMerge = array => {
    const midPoint = Math.floor(array.length / 2)
    const leftHalf = array.slice(0, midPoint)
    const rightHalf = array.slice(midPoint, array.length)

    
}

// This acts like a "pointer" to the object
// let obj1 = { value: 42 };
// let obj2 = obj1;  // obj2 now references the same object

// obj2.value = 100;
// console.log(obj1.value); // 100 (both point to same object)

/*
Algorithm: Merge Sort
Input: array of numbers
Output: a new array with the numbers sorted in ascending order

Steps:
1. If there is one or no number in the array:
2.   Return the array. It's already sorted.
3. Find the index of the mid point in the array.
4. Get a copy of the left half of the array.
5. Get a copy of the right half of the array.
6. Sort the left half.
7. Sort the right half.
8. Merge the two sorted halves and return the result.
*/

/*
Challenge:
***********

Implement the first algorithm in JavaScript. 


Notes:
******

1. Use recursion.
2. You may find `Math.floor()` and the array `slice()` methods useful.
*/


/*
Algorithm: Merge Two Sorted Arrays
Input: two sorted arrays of numbers, left and right
Output: a new array of the two arrays merged

Steps:
1. Init an empty result array.
2. Init a pointer for the left half.
3. Init a pointer for the right half.
4. Loop over both arrays until we reached the end of one of them:
5.   If the current number in the left half is less than the current number in the right half:
6.     Add it to the result.
7.     Increase the left pointer.
8.   Else:
9.     Add the current number from the right half to the result.
10.    Increase the right pointer.
11. After the loop is over, add whatever is left in either halves to the result.
12. Return the result array.
*/

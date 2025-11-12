const array = [5, 4, 2, 8, 1, 9, 7, 6, 11, 19, 17, 14, 30, 25, 20, 25, 22]
const arrayLength = array.length

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

const mergeTwoSortedArrays = (leftArray, rightArray) => {
    // console.log(leftArray, rightArray)
    const resultArray = []
    let leftPointer = 0
    let rightPointer = 0

    for (let i = 0; i < arrayLength; i++) {
        if (leftArray[leftPointer] < rightArray[rightPointer]){
            resultArray.push(leftArray[leftPointer])
            leftPointer++
        }
        else {
            resultArray.push(rightArray[rightPointer])
            rightPointer++
        }
    }   

    return resultArray
}

const mergeSort = array => {
    if (array.length <= 1) return array
    const midPoint = Math.floor(array.length / 2)

    return mergeTwoSortedArrays(sortArray(array.slice(0, midPoint)), sortArray(array.slice(midPoint, array.length)))
}

console.log(mergeSort(array))

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


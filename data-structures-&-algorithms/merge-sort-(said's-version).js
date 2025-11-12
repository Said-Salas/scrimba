const array = [5, 4, 2, 8, 1, 9, 7, 6, 0]
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

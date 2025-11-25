const array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2]

const mergeSort = array => {
    if (array.length === 1) return array;
    
    const mid = Math.floor(array.length / 2)
    const leftHalf = array.slice(0, mid)
    const rightHalf = array.slice(mid)

    const sortedLeft = mergeSort(leftHalf)
    const sortedRight = mergeSort(rightHalf)

    return mergingArrays(sortedLeft, sortedRight)
}

const mergingArrays = (leftArray, rightArray) => {
    const result = []
    let leftPointer = 0
    let rightPointer = 0

    while (leftPointer < leftArray.length && rightPointer < rightArray.length) {
        if (leftArray[leftPointer] < rightArray[rightPointer]) {
            result.push(leftArray[leftPointer])
            leftPointer++
        } else { 
            result.push(rightArray[rightPointer])
            rightPointer++
        }
    }
    return [
        ...result, 
        ...leftArray.slice(leftPointer),
        ...rightArray.slice(rightPointer)
        ]
}

console.log(mergeSort(array))

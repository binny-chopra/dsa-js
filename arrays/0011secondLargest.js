function secondLargestFn(arr) {
    n = arr.length
    largest = arr[0]
    sLargest = -Infinity
    for (let i = 1; i < n; i++) {
        if (arr[i] > largest) {
            sLargest = largest
            largest = arr[i]
        } else if (arr[i] < largest && arr[i] > sLargest) {
            sLargest = arr[i]
        }
    }
    return sLargest
}

console.log(secondLargestFn([1, 2, 4, 7, 7, 5]))
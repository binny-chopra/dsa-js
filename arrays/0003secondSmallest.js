function secondSmallestFn(arr) {
    let smallest = arr[0]
    let sSmallest = Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            sSmallest = smallest
            smallest = arr[i]
        } else if (arr[i] > smallest && arr[i] < sSmallest) {
            sSmallest = arr[i]
        }
    }
    return sSmallest
}

console.log(secondSmallestFn([90, 67, 45, 90, 38, 7, 3, 2, 9]))

// TC: O(n)
// SC: O(1)
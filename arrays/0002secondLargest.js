function secondLargestFn(arr) {
    largest = arr[0]
    sLargest = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            sLargest = largest
            largest = arr[i]
        } else if (arr[i] < largest && arr[i] > sLargest) {
            // Update sLargest if element is between sLargest and largest
            sLargest = arr[i]
        }
    }
    return sLargest
}

console.log(secondLargestFn([9, 44, 80, 3, 4, 4, 76]))

// TC: O(n)
// SC: O(1)
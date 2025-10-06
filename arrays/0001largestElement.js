function largestElement(arr) {
    let largest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

console.log(largestElement([5, 9, 5, 1, 10, 30]))

// TC: O(n)
// SC: O(1)
function maxConsecutiveOnesFn(arr) {
    let counter = 0
    let currentCount = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentCount++
        } else {
            currentCount = 0
        }
        counter = Math.max(currentCount, counter)
    }
    return counter
}

console.log(maxConsecutiveOnesFn([1, 1, 2, 3, 3, 1, 1, 1, 6, 1, 1]))

// TC: O(n)
// SC: O(1)
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) { return false }
    }
    return true
}

console.log(isSorted([4, 5, 8, 12, 60]))

// TC: O(n)
// SC: O(1)
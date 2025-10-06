function linearSearchFn(arr, firstOccurence) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === firstOccurence) return i
    }
    return -1
}

console.log(linearSearchFn([4, 5, 6, 6, 6, 8, 9], 6))
console.log(linearSearchFn([4, 5, 6, 6, 6, 8, 9], 3))

// TC: O(n)
// SC: O(1)
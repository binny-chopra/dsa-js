function leftRotateBy1PlaceFn(arr) {
    const n = arr.length
    const temp = arr[0]
    for (let i = 1; i < n; i++) {
        arr[i - 1] = arr[i]
    }
    arr[n - 1] = temp
    return arr
}

console.log(leftRotateBy1PlaceFn([1, 2, 3, 4, 5]))

// TC: O(n)
// SC: O(1)
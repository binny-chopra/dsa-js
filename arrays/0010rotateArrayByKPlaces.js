function rotateArrByKPlacesFn(arr, k) {
    n = arr.length
    k = k % n
    if (k === 0) return arr
    reverse(arr, 0, k - 1)
    reverse(arr, k, n - 1)
    reverse(arr, 0, n - 1)
    return arr
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
}

console.log(rotateArrByKPlacesFn([1, 2, 3, 4, 5, 6, 7], 3))

// TC: O(n)
// SC: O(1)
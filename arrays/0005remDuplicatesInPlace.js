function removeDuplicatesInPlaceFn(arr) {
    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] != arr[i]) {
            arr[i + 1] = arr[j]
            i++
        }
    }
    return i + 1
}

console.log(removeDuplicatesInPlaceFn([1, 1, 2, 2, 2, 3, 3]))

// TC: O(n)
// SC: O(1)
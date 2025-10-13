function moveZerosToEndFn(arr) {
    let j = -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            j = i
            break
        }
    }
    if (j === -1) return -1
    for (let k = j + 1; k < arr.length; k++) {
        if (arr[k] !== 0) {
            [arr[k], arr[j]] = [arr[j], arr[k]]
            j++
        }
    }
    return arr
}

console.log(moveZerosToEndFn([1, 2, 0, 4, 3, 2, 0, 0, 5, 6]))

// TC: O(n)
// SC: O(1)
function appearsOnceFn(arr) {
    let num = 0
    for (let i = 0; i < arr.length; i++) {
        num ^= arr[i]
    }
    return num
}

console.log(appearsOnceFn([1, 1, 2, 3, 3, 4, 4]))
// TC: O(n)
// SC: O(1)
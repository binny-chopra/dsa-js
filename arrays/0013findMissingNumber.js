function findMissingNumber(arr, n) {
    if (arr.length === n) return
    total = n * (n + 1) / 2
    arrSum = 0
    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i]
    }
    return total - arrSum
}

console.log(findMissingNumber([1, 2, 4, 5], 5))

// TC: O(n)
// SC: O(1)

function findMissingNumberXor(arr, n) {
    let xor1 = 0
    let xor2 = 0
    for (let i = 0; i < n - 1; i++) {
        xor1 ^= arr[i]
        xor2 = xor2 ^ (i + 1)
    }
    xor2 = xor2 ^ n
    return xor1 ^ xor2
}

console.log(findMissingNumberXor([1, 2, 3, 5], 5))

// TC: O(n)
// SC: O(1)
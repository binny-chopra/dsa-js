function twoSumFn(arr, target) {
    let n = arr.length
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] === target) {
                console.log(i, j)
                return true
            }
        }
    }
    return false
}

console.log(twoSumFn([2, 6, 5, 8, 11], 14))

// TC: O(n2)
// SC: O(1)

// -------------------------------------------------------------------

function twoSumMapFn(arr, target) {
    let n = arr.length
    let map = new Map()
    for (let i = 0; i < n; i++) {
        const complement = target - arr[i]
        if (map.has(complement)) {
            console.log(map.get(complement), i)
            return true
        }
        map.set(arr[i], i)
    }
    return false
}

console.log(twoSumMapFn([2, 6, 5, 8, 11], 179))

// TC: O(n)
// SC: O(n)

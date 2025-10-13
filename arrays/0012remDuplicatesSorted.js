function removeDuplicatesSortedArrFn(arr) {
    n = arr.length
    i = 0
    for (let j = 1; j < n; j++) {
        if (arr[j] !== arr[i]) {
            arr[i + 1] = arr[j]
            i++
        }
    }
    console.log(i + 1)
    return (arr.slice(0, i + 1))

}

console.log(removeDuplicatesSortedArrFn([1, 1, 2, 2, 2, 3, 3]))
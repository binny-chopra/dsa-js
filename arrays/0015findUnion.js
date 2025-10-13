function findUnionFn(arr1, arr2) {
    let m = arr1.length
    let n = arr2.length
    let i = 0, j = 0

    while (i < m && j < n) {
        if (arr1[i] < arr2[j]) {
            addToUnionArr(arr1[i])
            i++
        } else if (arr1[i] > arr2[j]) {
            addToUnionArr(arr2[j])
            j++
        } else {
            addToUnionArr(arr1[i])
            i++
            j++
        }
    }

    while (i < arr1.length) {
        addToUnionArr(arr1[i])
        i++
    }

    while (j < arr2.length) {
        addToUnionArr(arr2[j])
        j++
    }

    return union
}

function addToUnionArr(arrElement) {
    if (union.length === 0 || union[union.length - 1] !== arrElement) {
        union.push(arrElement)
    }
}

firstArray = [1, 1, 2, 3, 4, 5]
secondArray = [2, 3, 4, 4, 5, 6]
union = []
console.log(findUnionFn(firstArray, secondArray))

// TC: O(m + n)
// SC: O(m + n)
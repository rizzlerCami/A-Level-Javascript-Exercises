function linearSearch(array, target) {
    let currentIndex = 0
    let foundIndex = -1
    while (foundIndex == -1 && currentIndex < array.length) {
        if (array[currentIndex] === target) {
            foundIndex = currentIndex
        } else {
            currentIndex++
        }
    }
    return foundIndex
}

function binarySearch(array, target) {
    let l = 0
    let r = array.length - 1
    let m
    let foundIndex = -1
    while (l <= r && foundIndex == -1) {
        mid = Math.floor((l+r) / 2)
        if (target === array[m]) {
            foundIndex = m
        } else if (target < array[m]) {
            r = m - 1
        } else {
            l = m + 1
        }
    }
    return foundIndex
}

function bubbleSort(array) {
    let n = array.length
    let swapped = true
    while (swapped) {
        swapped = false
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
                swapped = true
            }
        }
        n--
    }
    return array
}


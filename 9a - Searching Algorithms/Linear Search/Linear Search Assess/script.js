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
    let r = array.length
    let l = 0
    let m
    let foundIndex = -1
    while (l <= r && foundIndex == -1) {
        m = Math.floor((l + r) / 2)
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
    let swapped = true
    let n = array.length
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

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i - 1
        let current = array[i]
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = current
    }
    return array
}
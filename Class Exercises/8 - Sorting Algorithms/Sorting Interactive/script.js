function linearSearch(array, item) {
    let currentIndex = 0
    let foundIndex = -1
    while (foundIndex === -1 && currentIndex < array.length) {
        if (array[currentIndex] === item) {
            foundIndex = currentIndex
        } else {
            currentIndex++
        }
    }
    return foundIndex
}

function binarySearch(array, item) {
    let r = array.length - 1
    let l = 0
    let m
    let foundIndex = -1
    while (l <= r && foundIndex === -1) {
        m = (l + r) div 2
        if (array[m] === item) {
            foundIndex = m
        } else if (array[m] < item) {
            l = m + 1
        } else {
            r = m - 1
        }
    }
    return foundIndex
}

function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        
    }
}
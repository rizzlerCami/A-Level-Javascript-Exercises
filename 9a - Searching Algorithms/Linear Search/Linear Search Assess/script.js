function linearSearch(target, array) {
    let currentIndex = 0
    let foundIndex = -1
    while (foundIndex == -1 && currentIndex < array.length) {
        if (array[currentIndex] === target) {
            foundIndex = currentIndex
        }
    }
    return foundIndex
}

function binarySearch(array, target) {
    let l = 0
    let m
    let r = array.length - 1
    let foundIndex = -1
    while (l <= r && foundIndex == -1) {
        m = Math.floor((l + r)/ 2)
        if (array[m] === target) {
            foundIndex = m
        } else if (array[m] < target) {
            l = m + 1
        } else {
            r = m - 1
        }
    }
    return array
}

function bubbleSort(array) {
    let swapped = true
    while (swapped) {
        swapped = false
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i + 1]
                array[i + 1] = array[i] 
                array[i] = temp
                swapped = true
            }
        }
    }
}

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i - 1
        while (j >= 0 && array[j] > array[j + 1]) {
            let temp = array[j + 1]
            array[j + 1] = array[j]
            array[j] = temp
            j--
        }
    }
    return array
}
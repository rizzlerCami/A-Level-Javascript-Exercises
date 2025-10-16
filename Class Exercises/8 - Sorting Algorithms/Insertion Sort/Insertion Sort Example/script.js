function bubbleSort(array) {
    let n = array.length
    let swapped = true
    while (swapped) {
        swapped = false
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i + 1]
                array[i + 1] = array[i]
                array[i] = temp
                swapped = true
            }
        }
        n--
    }
    return array
}
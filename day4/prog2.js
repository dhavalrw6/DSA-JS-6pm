//Selection sort

let arr = [64, 34, 25, 12, 22]

const SelectionSort = (arr) => {
    let n = arr.length

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) // 1 , 3
            {
                minIndex = j
            }
        }
        if (i != minIndex) {
            // arr[i] = arr[minIndex];
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

console.log(SelectionSort(arr));

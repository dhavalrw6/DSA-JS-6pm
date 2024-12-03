let arr = [10, 34, 54, 65, 64, 32, 5, 67];

let bubbleSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {//O(1)
        let swap = false;
        for (let j = 0; j < n - i - 1; j++) { // O(n)
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swap = true
            }
        }
        if (!swap) {
            break;
        }
    }
    return arr;
}

console.log(bubbleSort(arr));


// Time Complexity
// Best case: O(n) when the array is already sorted
// Average case: O(n^2) when the array is randomly ordered
// Worst case: O(n^2) when the array is reverse sorted

//Space Complexity: O(1) because it only uses a constant amount of space to store the temporary swap
let arr = [101, 34, 54, 43, 64, 32, 5, 67];

let selectionSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[minIndex] > arr[j]) { // Swap if this element is smaller than new one
                minIndex = j;
            }
        }
        // Swap the found minimum element with the first element
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

console.log(selectionSort(arr));


// Time Complexity
// Best Case : O(n^2)
// Average Case : O(n^2)
// Worst Case : O(n^2)

//Space Complexity : O(1) because we are not using any extra space.

let arr = [1, 5, 3, 10, 7, 2];

const quickSort = (arr) => {
    let n = arr.length;
    if (n <= 1) return arr;
    let pivot = arr[n - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
        console.log(left, pivot, right);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr));

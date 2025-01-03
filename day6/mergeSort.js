let arr = [10, 20, 32, 43, 5, 32, 56];

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);x
}


const merge = (left, right) => {
    let result = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        }
        else {
            result.push(right.shift())
        }
    }
    return [...result, ...left, ...right];
}

console.log(mergeSort(arr));
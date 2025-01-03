const arr = [1, 4, 5, 7, 8, 10];

const lowerBound = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] <= target) {
            start = mid + 1;
        }
        else {
            end = mid;
        }
    }

    return start;

}

console.log(lowerBound(arr, 5));

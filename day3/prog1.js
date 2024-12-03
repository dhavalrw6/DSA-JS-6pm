

const findMaxValue = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMaxValue([10,32,54,65,7,89]));

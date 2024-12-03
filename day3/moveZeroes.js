//[0, 1, 0, 3, 12]

const moveZeroes = (arr) => {
    let nonZeroIndex = 0; // 2

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex++] = arr[i]; // arr[2] = arr[4] // 3
        }
    }
    // fill the rest of the array with zeroes
    for (let i = nonZeroIndex; i < arr.length; i++) {
        arr[nonZeroIndex++] = 0;        
    }
    return arr;
}

// arr = [1,3,12,3,12]

console.log(moveZeroes([0, 1, 0, 3, 12,0,43,5,6,0]));

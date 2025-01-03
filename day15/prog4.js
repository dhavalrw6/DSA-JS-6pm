let arr = [1, 2, 4, 2, 5, 6]

const testProgram = (arr) => {
    let result = Array(arr.length).fill(-1);
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                {
                    result[i] = arr[j];
                    break;
                }
            }

        }
    }
    return result;
}
console.log(testProgram(arr));

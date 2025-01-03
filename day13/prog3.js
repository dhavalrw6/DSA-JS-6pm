let arr = [1, 2, -4, 4, 6, 5, -2];

// TC = O(n)
// SC = O(1)

const kadaneAlg = (arr) => {
    let n = arr.length;
    let maxSum = 0;
    let currentSum = 0;
    for (let i = 0; i < n; i++) {
        currentSum += arr[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return maxSum;
}

console.log(kadaneAlg(arr));

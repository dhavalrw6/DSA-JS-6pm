// find max sum of subArray.

let arr = [1, 2, -4, 4, 6, 5, -2];

// O(n^2)

const maxSubArraySum = (arr) => {
    let n = arr.length;
    let maxSum = 0;
    let start;
    let end;
    for (let i = 0; i < n; i++) {
        let currentSum = 0;
        let str = '';
        for (let j = i; j < n; j++) {
            currentSum += arr[j];
            str += currentSum + ' ';
            if (currentSum > maxSum) {
                maxSum = currentSum;
                start = i;
                end = j;
            }
        }

    }
    return { sum: maxSum, subArray: arr.slice(start, end + 1) };
}


console.log(maxSubArraySum(arr));

// maxSubArraySum(arr);

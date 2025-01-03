// find all sub array.

let arr = [1, 2, 3, 4, 5];

// O(n^3)

const subArray = (arr) => {
    let n = arr.length;
    for (let start = 0; start < n; start++) { // n
        let str = '';
        for (let end = start; end < n; end++) { // n
            for (let i = start; i <= end; i++) { // n
                str += arr[i]; 
            }
            str += ' ';
        }
        console.log(str);
    }

}

subArray(arr);
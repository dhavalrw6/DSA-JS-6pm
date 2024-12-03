// let arr = [1, 2, 3, 4, 0, 5, 0, 0];

// delete arr[0];

// arr.splice(0, 1);

// console.log(arr);

let getData = (arr) => {
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] !== 0) {
            arr.unshift(arr.pop());
        }
    }
    return arr;
}


console.log(getData([1, 2, 3, 4, 0, 5, 0, 0]));

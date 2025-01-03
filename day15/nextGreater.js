let arr = [1, 2, 4, 2, 5, 6]

const nextGreater = (arr) => {
    let stack = [];
    let result = new Array(arr.length).fill(-1);

    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
            result[stack.pop()] = arr[i];
        }
        stack.push(i);
    }
    return result;
}

console.log(nextGreater(arr));

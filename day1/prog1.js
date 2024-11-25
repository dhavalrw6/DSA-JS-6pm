let arr = [10, 23, 43, 54, 65, 3, 5, 65];
let i;

let val = 120;

for (i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
        console.log("Element of " + arr[i]);
        console.log("index of Element is: ", i);
        break;
    }
}
 // target 17

// const binarySearch = (arr, target) => {
//     let start = 0;
//     let end = arr.length - 1;



//     while(start <= end){

//         let mid = Math.floor((start + end) / 2);

//         if (arr[mid] === target) {
//             return mid;
//         }

//         if (arr[mid] < target) {
//             start = mid + 1;
//         }
//         else {
//             end = mid - 1;
//         }
//     }

//     return -1;

// }

// console.log(binarySearch(arr,10));


const arr = [1, 3, 4, 5, 6, 7, 15, 17]

const binarySearch = (arr, target, start, end) => {

    if (start > end) {
        return -1;
    }    

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] < target) {
        // start = mid + 1;
       return binarySearch(arr, target, mid + 1, end);
    }
    else {
        // end = mid - 1;
       return binarySearch(arr, target, start, mid - 1);
    }

}

console.log(binarySearch(arr, 15, 0, arr.length - 1));

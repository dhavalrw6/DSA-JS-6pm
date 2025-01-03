const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         console.log(arr[i][j]);
//     }
// }

// for(let row in arr) {
//     for(let col in arr[row]){
//         console.log(arr[row][col]);        
//     }
// }

// arr.forEach((row) => {
//     row.forEach((val) => {
//         console.log(val);
//     })
// })

arr.push([10,11,20])

arr.forEach((row) => {
    row.push(0)
})

// let array =new Array(10);
console.log(arr);




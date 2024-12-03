let arr = [12, 11, 13, 5, 6];

let InsertionSort = (arr) => {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(InsertionSort(arr));


//Time Complexity

//Base Case:- O(1)
//Average Case: O(n^2)
//Worst Case: O(n^2)

//Space Complexity: O(1)
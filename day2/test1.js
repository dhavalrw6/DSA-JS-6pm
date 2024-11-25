class demo {
    constructor() {
        this.arr = [];
    }

    insertData(val) {
        this.arr.push(val);
    }
    deleteData(index) {
        this.arr.splice(index, 1);
    }

    updateData(index, value) {
        this.arr.splice(index, 1, value);// replace the value at index with the new value
    }
    getData() {
        return this.arr;
    }
    concNewArr(arr1) {
        return this.arr = [...this.arr, ...arr1];
        // return this.arr.concat(arr1);
    }
}

let obj = new demo();

obj.insertData(10);
obj.insertData(20);
obj.insertData(30);
obj.insertData(40);


obj.updateData(0, 11);



console.log(obj.getData());

console.log(obj.concNewArr([20, 30, 23]));

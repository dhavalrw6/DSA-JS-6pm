let nums = [1,23,43,5,45,65,76,32,43];

const linearSearch = (nums,target)=>{
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]===target){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(nums,32));

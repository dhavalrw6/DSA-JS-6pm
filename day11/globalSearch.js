let nums = [1, 23, 43, 5, 45, 65, 76, 32, 43];
// [2,8]
const globalSearch=(nums,target)=>{
    let result = [];
    for(let i=0;i< nums.length ; i++){
        if(nums[i] === target){
            result.push(i);
        }
    }
    if(result.length === 0) return -1;
    return result;
}

console.log(globalSearch(nums,430));

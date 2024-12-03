let removeDuplicates =(arr)=>{
    return [...new Set(arr)];
} 

console.log(removeDuplicates([1,23,43,2,2,3,43,43,32,32,4]));

let arr = [1,2,4,5,6,7,13];

const binarySearch = (arr,target,start,end)=>{

    if(start > end)
    {
        return -1;
    }

    let mid = Math.floor((start + end)/2);

    if(arr[mid] === target){
        return mid;
    }

    if(arr[mid] < target)
    {
        return binarySearch(arr,target,mid+1,end);
    }
    else
    {
        return binarySearch(arr,target,start,mid-1);
    }
}

console.log(binarySearch(arr,13,0,arr.length-1));

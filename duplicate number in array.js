let arr=[3,4,6,7,6,4,3,3,3,3,3,1];
let duplicate={};
for(let i=0;i<arr.length;i++)
{
    if(arr[i]in duplicate)
    {
    duplicate[arr[i]]=duplicate[arr[i]]+1;
    }
    else
    {
        duplicate[arr[i]]=1;
    }
}
console.log(duplicate);

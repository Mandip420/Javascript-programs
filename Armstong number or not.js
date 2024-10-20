let num=152;
let intval=parseInt(num);
let newstr=intval.toString();
let count=0;
let sum=0;
for(let i=0;i<newstr.length;i++)
{
   count++;
}
for(let i=0;i<newstr.length;i++)
{
    let final=parseInt(newstr[i]);
    sum=sum+final**count;
}
 if(intval==sum)
    {
        console.log("Armstrong");
    }
    else
    {
        console.log("Not Armstrong");
    }
var arr=[11,10,70,75,59,2,9];
document.write("To Find Odd number"+arr);
document.write("<br>")
var count=0;

for(let i=0;i<arr.length;i++){
	if(arr[i]%2!=0)
	{
		count++;
	}


}
document.write("odd number is:"+count);
document.write("<br>")
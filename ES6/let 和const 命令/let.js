/* {
  var a=1;
  let b=2;
  {
  console.log(b)
  }
}
console.log(a) 
var a=[];
for(var i=0;i<10;i++){
  a[i]=function(){
    console.log(i)
  }
}
a[5]();   //10

var b=[];
for(let j=0;j<10;j++){
  b[j]=function(){
    console.log(j)
  }
}
b[5]();   //5

*/
for(let i=0;i<3;i++,console.log(i)){
  let i='abc';
  console.log(i);
}

// abc
// 1
// abc
// 2
// abc
// 3
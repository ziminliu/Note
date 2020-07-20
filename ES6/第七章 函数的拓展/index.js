// 参数作用域
var x=1;
function f(x,y=x){
  console.log(y)
}
console.log(f.name)
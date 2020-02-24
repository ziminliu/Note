// 字符串的遍历器接口
for (let a of "hello"){
  console.log(a)
}
//h
//e
//l
//l
//o

var text=String.fromCodePoint(0x20BB7);
for(let i=0;i<text.length;i++){
  console.log(text[i])
} 
for (let a of text){
  console.log(a)
}
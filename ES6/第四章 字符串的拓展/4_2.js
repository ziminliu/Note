// codePointAt()
var a="你好";
console.log(a.length)

var b="𠮷";
console.log(b.charAt(0))
console.log(b.charAt(1))
console.log(b.charCodeAt(0))
console.log(b.charCodeAt(1))
console.log(b.codePointAt(0))
console.log(b.codePointAt(1))
console.log(b.codePointAt(0).toString(16))

var s="𠮷a";
for (let a of s){
  console.log(a.codePointAt(0).toString(16));
}
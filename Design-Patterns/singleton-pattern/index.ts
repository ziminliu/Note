/* 
    单例模式
1. 一个全局使用的类的频繁创建与销毁
优点：在内存中只有一个实例，减小内存开销
缺点：没有接口 不能继承与单一职责原则冲突
场景：   1. 生产唯一序列号
        2. web 中的计数器，使用单例缓存
*/

function Single(name){
    this.name = name;
    this.instance =null;
    console.log('实例只被创建一次')
}
function getInstance(name){
    if(!this.instance){
        this.instance = new Single(name);
    }
    return this.instance;
}
let q = getInstance('aaa');
console.log(q.name);

let p = getInstance('bbb');
console.log(p.name);

class SingleObject{
    
}
const a = new SingleObject();

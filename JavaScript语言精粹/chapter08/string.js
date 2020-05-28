/*
 * @Author: ziminLiu
 * @Date: 2020-05-28 14:50:37
 * @LastEditors: ziminLiu
 * @LastEditTime: 2020-05-28 16:27:08
 */

let result = 'monther_in_law'.replace('_', '-');
console.log(result);

let oldareacode = /\((\d{3})\)/g;
let p ='(555)666-1212'.replace(oldareacode,'$1-')
console.log(p)

// string.regexp()
console.log(p.search(/[-]/))

let a='123456789'
console.log(a.split())
console.log(a.split(''))
let ip='192.168.0.1'
console.log(ip.split('.'))

// 使用正则
let IP=ip.split(/\s*(\.)\s*/)
console.log(IP)

console.log(String.fromCharCode(67,97,116))
/*
 * @Author: ziminLiu
 * @Date: 2020-05-27 20:47:21
 * @LastEditors: ziminLiu
 * @LastEditTime: 2020-05-27 22:42:05
 */

//  URL 的正则
let parse_url = /^(?:([A-Xa-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
let url =
  'https://developer.mozilla.org:8080/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype?q#liuzimin';
let result = parse_url.exec(url);
console.log(result);

// 小数的正则判断

let parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;
let test = function (num) {
  console.log(parse_number.test(num));
};
test(5.666);
console.log("a"+'\u2029'+"a")
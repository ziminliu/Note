/*
 * @Author: ziminLiu
 * @Date: 2020-05-28 14:08:28
 * @LastEditors: ziminLiu
 * @LastEditTime: 2020-05-28 14:50:07
 */

let PI = Math.PI;

// 1. PI.toExponential(fractionDigits)
console.log(PI.toExponential(5));

// 2. PI.toFixed()
console.log(PI.toFixed(2))

// 3. PI.toPrecision()
console.log(PI.toPrecision(3))
console.log(0.21856.toPrecision(3))

// 4. PI.toString(radix)
console.log(PI.toString())
// es 5 严格模式下 8 进制不能使用0 作为前缀，需使用0o
console.log(0o10.toString(2))
console.log(String(PI))
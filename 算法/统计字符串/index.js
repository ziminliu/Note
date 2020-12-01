let str = "asdfghjklaqwertyuiopiaia";

const maxChar = (str) => {
  let obj = {};
  let arr = [...str];
  let max = 0;
  let maxChar = "";
  arr.forEach((value) => {
    obj[value] = obj[value] === undefined ? 1 : obj[value] + 1;
    if (obj[value] > max) {
      maxChar = value;
    }
  });
  return maxChar;
};

console.log(maxChar(str));

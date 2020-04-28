// 排序算法 从大到小

// 冒泡排序
let arr = [7, 5, 6, 3, 2, 8, 0, 9, 4, 1];

function bubbleSort(arr) {
  // 遍历比较元素 次数为 长度减一  次
  for (let i = 0, length = arr.length; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        // 交换相邻两元素值
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
// console.log(bubbleSort(arr));

// 选择排序
function selectSort(arr) {
  let maxIndex = 0;
  for (let i = 0, length = arr.length; i < length - 1; i++) {
    maxIndex = i;
    for (let j = i; j < length - 1; j++) {
      // 若所记录的最大值小于当前值的下一位 则记录该下标
      if (arr[maxIndex] < arr[j + 1]) {
        maxIndex = j + 1;
      }
      // console.log(maxIndex);
    }
    [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
  }
  return arr;
}

// console.log(selectSort(arr));

function insertSort(arr) {
  let tempValue = 0;
  for (let i = 0, length = arr.length; i < length; i++) {
    tempValue = arr[i];
    // 从后往前更容易理解
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < tempValue) {
        arr[j + 1] = arr[j];
        arr[j] = tempValue;
      } else {
        break;
      }
    }
  }
  return arr;
}
// console.log(insertSort(arr));

// 希尔排序 插入排序的升级版，第一个将时间复杂度降为n2一下的算法，但其算法不够稳定
function shellSort(arr) {
  // 设置gap  可随意设置gap 的值，但合理的gap 可以降低程序的时间复杂度，当gap 为1时  希尔排序===插入排序
  let len = arr.length;
  let gap = Math.floor(len / 3);
  let tempValue;
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; i++) {
      tempValue = arr[i];
    }
  }
  return arr;
}
console.log(shellSort(arr));

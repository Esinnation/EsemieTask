export function formatNumber(num) {
  let numStr = String(num);
  let length = numStr.length;
  
  if (length > 3) {
      if (length == 4) {
          return numStr.slice(0, 1) + ',' + numStr.slice(1);
      } else if (length == 9) {
          return numStr.slice(0, 3) + ',' + numStr.slice(3, 6) + ',' + numStr.slice(6);
      } else {
          return numStr.slice(0, length - 3) + ',' + numStr.slice(length - 3);
      }
  } else {
      return numStr;
  }
}

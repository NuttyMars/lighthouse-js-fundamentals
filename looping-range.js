const range = function(start, end, step) {
  let newArray = [];
  for (let i = start; i <= end; i += step) {
    if (start !== false && end !== false && step !== false && (start < end) && step > 0) {
      newArray.push(i);
    }
    else {
      return [];
    }
  }
  return newArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
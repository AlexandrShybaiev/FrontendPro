
const arr = [2, 8, 4, 6, 7, true, "ssd", NaN];

function average(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      sum += arr[i];
      count++;
    }
  }
  if (count === 0) {
    return 0;
  } else {
    return sum / count;
  }
  // return count === 0 ? 0 : sum / count;
}

console.log(average(arr));
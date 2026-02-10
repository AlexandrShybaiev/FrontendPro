const numbers = [5, 12, 36, 9, 1, 3, 4, 5, 6];
const evenNumbers = [];

for (const num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}
console.log(evenNumbers);



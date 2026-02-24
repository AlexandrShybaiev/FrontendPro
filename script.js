function sumDeposit() {
  let total = 0;

  function deposit(amount) {
    total += amount;
    return total;

  }

  return deposit;
}

const sum = sumDeposit();

console.log(sum(4)); // 4

console.log(sum(6)); // 10

console.log(sum(10)); // 20

console.log(sum(7)); // 27


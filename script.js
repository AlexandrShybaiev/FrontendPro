//Дано тризначне число, яке надае користувач, потрибно визначити:
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?
let userNumber = Number(prompt("Enter a number"));
console.log(userNumber);
if (!userNumber || isNaN(userNumber)) {
  console.log("Please enter a number. Example: 123");
} else {

  let a = Math.floor(userNumber / 100);
  let b = Math.floor(userNumber / 10) % 10;
  let c = userNumber % 10;

  let allSame = (a === b && b === c);
  if (allSame) {
    console.log("Усі цифри однакові:", allSame);
  } else {
    console.log("Усі цифри  не однакові:", allSame);
  }

  let anySame = (a === b || a === c || b === c);
  if (anySame) {
    console.log("Є хоча б дві однакові:", anySame);
  } else {
    console.log("Немає  двох однакових:", allSame);
  }
}

//
// let n = prompt("Enter a number");
//
// let a = Math.floor(n / 100);
// let b = Math.floor(n / 10) % 10;
// let c = n % 10;
//
// let allSame = (a === b && b === c);
// let anySame = (a === b || a === c || b === c);
//
// console.log("Число", n);
// console.log("Усі цифри однакові:", allSame);
// console.log("Є хоча б дві однакові:", anySame);

//Створити функцію, яка прибирає з рядка всі символи,
// які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])'
// поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
function deleteChars(str, charsDelete) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (!charsDelete.includes(str[i])) {
      newStr += str[i];
    }
  }

  return newStr;
}

console.log(deleteChars("hello world", ["l", "d"]));

// function deleteChars(str, charsDelete) {
//   let newStr = "";
// for(let j = 0; j < charsDelete.length; j++) {
//
//   for ( let i = 0; i < str.length;i++){
//     if( str[i] !== charsDelete[j]){
//       newStr+=str[i]
//     }
//
//   }
// }
//   return newStr;
// }
//
// console.log(
//   deleteChars("hello world", ["l", "o"])
// );

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.length);
// function removeFromArray(str, charToRemove) {
//   let newStr = "";
//
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== charToRemove) {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }
//
// console.log(
//   removeFromArray("hello world", "e")
// );

//
// function sayHello(userName, age) {
//   // const  userName = prompt("What is your name?");
//
//   if (typeof userName === "string") {
//     console.log("Hello World!" + " " + userName + " " + age);
//   } else {
//     console.log("I need to string for work ");
//   }
// }
//
// sayHello();
// sayHello("Alex", 25);
//
//
//


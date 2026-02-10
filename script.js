// Створіть об'єкт, що містить інформацію про користувача,
// таку як ім'я, вік, місце проживання тощо.
// Створіть метод об'єкту для отримання та відображення цих даних.
const user = {
  name: 'John',
  age: 18,
  city: 'San Francisco',
}
console.log("1")
console.log("Object.values - " + Object.values(user) )

console.log("2")
console.log("Object.keys - " +Object.keys(user) )
//
console.log("3")
for(const key of Object.keys(user)) {
  console.log("\n" + key )
  console.log( key + ":", user[key] )
}
const book = {
  contacts: [
    {
      name: 'John',
      phone: '0123456789',
      email: "john@mail.com"
    },
    {
      name: 'Alice',
      phone: '0987654321',
      email: "alice@mail.com"
    },
    {
      name: 'Bob',
      phone: '1111111111',
      email: "bob@mail.com"
    },
  ],
};
let action = prompt("Введіть дію: add / search / stop");
switch (action) {
  case null:
  case "stop" :
    break;
  case "add":
    const userData = prompt("Enter phone data: name/ phone/ email");
    const parts = userData.split("/");
    const newRecord = {
      name: parts[0],
      phone: parts[1],
      email: parts[2],
    };
    book.contacts.push(newRecord);
    break;

  case "search":
    console.log("Searching...");
    const searchName = prompt("Enter search name");

    let notFound = true;
    for (let i = 0; i < book.contacts.length; i++) {
      if (book.contacts[i].name === searchName) {
        console.log("FOUND! >>>", book.contacts[i]);
        notFound = false;
        break;
      }
    }

    if (notFound) {
      console.log("Ми нікого не знайшли ");
    }
    break;
  default:
    console.log("Невідома дія");

}

//
// while (true) {
//   const input = prompt("Введіть дію: add / search / stop");
//   if (input === null || input === "stop") {
//     break;
//   }
//   if (input === "add") {
//     const userData = prompt("Enter phone data: name/ phone/ email");
//     const parts = userData.split("/");
//     const newRecord = {
//       name: parts[0],
//       phone: parts[1],
//       email: parts[2],
//     };
//     book.contacts.push(newRecord);
//   }
//
//   if (input === null || input === "search") {
//     console.log("Searching...");
//     const searchName = prompt("Enter search name");
//
//     let notFound = false;
//     for (let i = 0; i < book.contacts.length; i++) {
//       if (book.contacts[i].name === searchName) {
//         console.log("FOUND! >>>", book.contacts[i]);
//         notFound = false;
//         break;
//       }
//     }
//
//     if (notFound) {
//       console.log("Ми нікого не знайшли ");
//     }
//   }
// }
console.log("Result: ", book);
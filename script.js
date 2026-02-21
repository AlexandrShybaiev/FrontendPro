function removeElement(array, item) {
  const index = array.indexOf(item); // шукаємо позицію елемента

  if (index !== -1) { // якщо знайдено
    array.splice(index, 1); // видаляємо 1 елемент з цієї позиції
  }
}

const array = [1, 3, 4, 6, 2, 5, 7];

removeElement(array, 4);

console.log(array); // [1, 3, 6, 2, 5, 7]
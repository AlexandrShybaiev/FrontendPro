//Основне завдання, cтворити скрипт яки повинен виконувати наступне:
// запитати у користувача рік народження;
// запитати в нього, в якому місті він живе;
// запитати його улюблений вид спорту.
// При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:
// його вік;
// якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну, столицею якої є місто. Інакше показуємо йому “ти живешу місті…”, де місце точок – введене місто.

let birthYearStr = prompt("Введи рік народження (наприклад, 1999):")
let city = prompt("В якому місті ти живеш?");
let sport = prompt("Твій улюблений вид спорту?");

// cancel тиць - "Ти скасував введення."
if (birthYearStr === null || city === null || sport === null) {
  alert("Ти скасував введення.");
} else {
  let birthYear = Number(birthYearStr);
  let currentYear = new Date().getFullYear();

  if (birthYearStr === ""|| Number.isNaN(birthYear) || birthYear < 1920 || birthYear > currentYear) {
    alert("Введи коректний рік народження (наприклад, 1999).");
  } else {
    let age = currentYear - birthYear;


    let normalizedCity = city.trim().toLowerCase();
    let capitals = {
      "київ": "України",
      "вашингтон": "США",
      "лондон": "Великої Британії",
    };
    let cityMessage;
    if (capitals[normalizedCity]) {
      cityMessage = "Ти живеш у столиці " + capitals[normalizedCity] + "!";
    } else {
      cityMessage = "Ти живеш у місті " + city.trim() + ".";
    }


    let s = sport.trim().toLowerCase();
    let sportMessage;

    if (s === "футбол") {
      sportMessage = "Круто! Можливо, станеш як Мессі або Роналду ";
    } else if (s === "баскетбол") {
      sportMessage = "Круто! Можливо, станеш як Леброн Джеймс ";
    } else if (s === "теніс") {
      sportMessage = "Круто! Можливо, станеш як Надаль чи Джокович ";
    } else {
      sportMessage = "Класний вибір — " + sport.trim() + "!";
    }

    let result =
      "Твій вік: " + age + "\n" +
      cityMessage + "\n" +
      sportMessage;

    alert(result);
  }
}


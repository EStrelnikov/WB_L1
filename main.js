import { isPalindrome, isPalindrome2 } from "./tasks/task_1/task_1";
import { isStrangeNumber } from "./tasks/task_2/task_2";
import { mathX } from "./tasks/task_3/task_3";
import { renderPhrase } from "./tasks/task_4/task_4";
import { jsonLinkedList } from "./tasks/task_5/task_5";
import { sortPeople } from "./tasks/task_6/task_6";
import { sequentialCallFunctions } from "./tasks/task_7/task_7";
import { createFunctionArray } from "./tasks/task_8/task_8";
import { customStringify } from "./tasks/task_9/task_9";
import { customParse } from "./tasks/task_10/task_10";
import { parentFunction } from "./tasks/task_11/task_11";
import { book } from "./tasks/task_12/task_12";
import { Circle, Rectangle, Triangle } from "./tasks/task_13/task_13";
import { loadImage } from "./tasks/task_14/task_14";
import { fetchData } from "./tasks/task_15/task_15";
import { formatDate, getDifferenceDays } from "./tasks/task_16/task_16";

// Задание 1

console.log("-------------Задание 1");
console.log(
  "А роза упала на лапу Азора",
  isPalindrome("А роза упала на лапу Азора")
);
console.log("hello", isPalindrome("hello"));
console.log("аргентина манит негра", isPalindrome2("аргентина манит негра"));
console.log("isPalindrome2", isPalindrome2("isPalindrome2"));

// Задание 2

console.log("-------------Задание 2");
console.log(6, isStrangeNumber(6));
console.log(33550336, isStrangeNumber(33550336));
console.log(335, isStrangeNumber(335));

// Задание 3

console.log("-------------Задание 3");
console.log(mathX.fibonacci(10));
console.log(mathX.fibonacciSeries(4));
console.log(mathX.sumPrime(120));
console.log(mathX.primeNumberN(10));

// Задание 4

console.log("-------------Задание 4");
console.log(112, renderPhrase(112, ["сообщение", "сообщения", "сообщений"]));
console.log(12, renderPhrase(12, ["сообщение", "сообщения", "сообщений"]));
console.log(1, renderPhrase(1, ["сообщение", "сообщения", "сообщений"]));
console.log(
  1024,
  renderPhrase(1024, ["пользователь", "пользователя", "пользователей"])
);
console.log(
  1026,
  renderPhrase(1026, ["пользователь", "пользователя", "пользователей"])
);
console.log(
  121,
  renderPhrase(121, ["пользователь", "пользователя", "пользователей"])
);

// Задание 5

console.log("-------------Задание 5");
const json = JSON.stringify([1, 2, 3, 4, 5]);
console.log(jsonLinkedList(json));

// Задание 6

console.log("-------------Задание 6");
const people = [
  { name: "Alex", age: 34 },
  { name: "Danya", age: 29 },
  { name: "Vladimir", age: 34 },
  { name: "Evgeny", age: 31 },
];
console.log(sortPeople(people));

// Задание 7

console.log("-------------Задание 7");
const functionsArr_7 = [
  () => console.log("Тело функции №1"),
  () => console.log("Тело функции №2"),
  () => console.log("Тело функции №3"),
];
sequentialCallFunctions(functionsArr_7);

// Задание 8

console.log("-------------Задание 8");
const functionsArr_8 = [() => 2 + 3, () => 3 * 4, () => 12 / 6];
const resultFunc8 = createFunctionArray(functionsArr_8);
console.log(resultFunc8());

// Задание 9

console.log("-------------Задание 9");
const arr_9 = {
  name: "Zheka",
  age: 27,
  hobbies: ["music", "stand-aup"],
  address: {
    city: "Moscow",
    country: "Russia",
  },
};
const result_9 = customStringify(arr_9);
console.log(result_9);

// Задание 10

console.log("-------------Задание 10");
const result_10 = customParse(customStringify(arr_9));
console.log(result_10);

// Задание 11

console.log("-------------Задание 11");
const innerFunction = parentFunction();
console.log(innerFunction(13));

// Задание 12

console.log("-------------Задание 12");
console.log(book.getTitle());
book.setTitle("Война и Мир");
console.log(book.getTitle());

console.log(book.getAuthor());
book.setAuthor("Лев Николаевич Толстой");
console.log(book.getAuthor());

console.log(book.getYear());
book.setYear(1863);
console.log(book.getYear());

// Задание 13

console.log("-------------Задание 13");
const rect = new Rectangle(20, 10);
console.log("Площадь прямоугольника: ", rect.area());
console.log("Периметр прямоугольника: ", rect.perimeter());

const circle = new Circle(2);
console.log("Площадь круга: ", circle.area());
console.log("Периметр круга: ", circle.perimeter());

const triangle = new Triangle(7, 8, 9);
console.log("Площадь треугольника: ", triangle.area());
console.log("Периметр треугольника: ", triangle.perimeter());

// Задание 14

console.log("-------------Задание 14");
const imageUrl = "https://via.placeholder.com/600/92c952";
loadImage(imageUrl)
  .then((image) => {
    // Изображение успешно загружено, можно продолжать работу с ним
    console.log(
      "Изображение загружено, Размер(высота, ширина):",
      image.height,
      image.width
    );
  })
  .catch((error) => {
    // Ошибка при загрузке изображения
    console.error("Ошибка при загрузки изображения:", error);
  });

// Задание 15

console.log("-------------Задание 15");
await fetchData()
  .then((data) => {
    // Данные успешно получены, можно продолжать работу с ними
    console.log("Полученные данные:", data);
  })
  .catch((error) => {
    // Произошла ошибка при выполнении асинхронной операции
    console.error("Ошибка при получении данных:", error);
  });

// Задание 16

console.log("-------------Задание 16");
console.log(formatDate());
console.log(getDifferenceDays("2022-10-01", "2023-10-01"));

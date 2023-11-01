// 22 Посчитайте сколько раз можно вызвать функцию document.write() внутри document.write(). Объясните результат.

// Счетчик вызова
let counter = 0;

function countDocumentWrites() {
  try {
    //Увеличение счетчика
    counter++;
    console.log(counter);
    //Рекурсивный вызов countDocumentWrites()
    document.write("Вызов функции document.write(): " + countDocumentWrites());
  } catch (e) {
    //Возможная обработка ошибки
    console.error("Ошибка вызова №: ", counter);
    console.log("Количество успешных вызовов document.write():", counter - 1);
  }
}

countDocumentWrites();

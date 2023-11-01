// 16 Задача на модули и использование внешних библиотек: напишите модуль, который экспортирует функцию для работы с датами. Внутри модуля используйте внешнюю библиотеку Moment.js для удобной работы с датами.

import moment from "moment";

// Функция для форматирования даты
function formatDate(format = "YYYY-MM-DD") {
  // Используем Moment.js для форматирования даты в нужном формате
  return moment().format(format);
}

function getDifferenceDays(date1, date2) {
  const date_1 = moment(date1);
  const date_2 = moment(date2);
  return date_2.diff(date_1, "days");
}

export { formatDate, getDifferenceDays };

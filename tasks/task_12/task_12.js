// 12 Задача на работу с объектами: создайте объект, представляющий собой книгу. Объект должен иметь свойства, такие как: название книги, автор и год издания. Напишите методы для получения и изменения значений свойств книги.

export const book = {
  title: "Герой нашего времени",
  author: "Михаил Юрьевич Лермонтов",
  year: 1838,
  // Получаем зачение свойства title - назхвание кнги
  getTitle: function () {
    return this.title;
  },
  // Получаем зачение свойства author - автор книги
  getAuthor: function () {
    return this.author;
  },
  // Получаем зачение свойства year - год публикации
  getYear: function () {
    return this.year;
  },
  // Устанавливаем новое значение title
  setTitle: function (newTitle) {
    this.title = newTitle;
  },
  // Устанавливаем новое значение author
  setAuthor: function (newAuthor) {
    this.author = newAuthor;
  },
  // Устанавливаем новое значение year
  setYear: function (newYear) {
    this.year = newYear;
  },
};

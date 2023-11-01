// 28 Задача: Создать и добавить элемент с использованием шаблонов: Напишите функцию, которая создает новый элемент с использованием шаблонов (например, с помощью тега <template>) и добавляет его в DOM.

// данные для заполнения шаблона
const personInfo = {
  avatar: null,
  name: "Иван",
  profession: "Слесарь",
};

function addCard() {
  // Получение шаблона
  const templateCard = document.querySelector("template");
  // Создается копия шаблона с помощью importNode(), чтобы избежать модификации исходного шаблона. Второй аргумент true указывает на то, что нужно импортировать и дочерние элементы
  const firstClone = document.importNode(templateCard.content, true);

  // Манипуляции с содержимым элемента
  firstClone.children[0].children[1].innerText = personInfo.name;
  firstClone.children[0].children[2].innerText = personInfo.profession;

  // добавляем шаблон в DOM
  document.querySelector(".list").append(firstClone);
}

addCard();

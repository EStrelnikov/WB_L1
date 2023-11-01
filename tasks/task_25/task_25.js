// 25 Задача: Создать и добавить стиль для элемента: Напишите функцию, которая создает новый элемент, добавляет его в DOM и устанавливает для него стиль с помощью CSS.

function createElement() {
  const header = document.createElement("header");
  header.classList.add("header");
  header.style.height = "40px";
  header.style.background = "red";
  header.style.padding = "20px";
  header.innerText = "header";
  document.querySelector("div").prepend(header);
}

createElement();

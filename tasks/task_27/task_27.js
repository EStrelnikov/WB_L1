// 27 Задача: Добавить анимацию для элемента: Напишите функцию, которая добавляет анимацию для элемента на веб-странице, например, плавное изменение его положения или размера.

// элмент , которому будет добавлять анимацию
const element = document.querySelector(".item");

const btn = document.querySelector(".btn_1");
const btn_2 = document.querySelector(".btn_2");
btn.addEventListener("click", () => animateElementSize(element));
btn_2.addEventListener("click", () => animateElementSize2(element));

// 1 способ

function animateElementSize(element) {
  // запомнить время начала
  let start = Date.now();
  let timer = setInterval(function () {
    // сколько времени прошло с начала анимации?
    let timePassed = Date.now() - start;

    element.style.marginLeft = timePassed / 5 + "px";

    // закончить анимацию через 2 секунды
    if (timePassed > 2000) clearInterval(timer);
  }, 20); // изменять на 2px каждые 20ms, это около 50 кадров в секунду
}

// 2 способ

function animateElementSize2(element) {
  // дабвялет плаавность, изменяем высоты, ширину,
  element.style.transition = "all 2s";
  element.style.width = "50px";
  element.style.height = "40px";
  element.style.background = "grey";
  element.style.borderRadius = "50%";
}

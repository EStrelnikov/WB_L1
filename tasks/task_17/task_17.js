// 17 Необходимо реализовать простое поле ввода адреса с функцией геокодинга: пользователь вводит данные в поле с помощью одного из геоинформационных сервисов (Яндекс.Карты, ДаДата, GraphHopper), подбирается адрес. Найденные данные должны отображаться в выпадающем списке, из которого можно выбрать подходящее значение.

// geocode
// https://yandex.ru/dev/jsapi-v2-1/doc/ru/v2-1/ref/reference/geocode

// geocodeResult
// https://yandex.ru/dev/jsapi-v2-1/doc/ru/v2-1/ref/reference/GeocodeResult

// методы GeoObjects
// https://yandex.ru/dev/jsapi-v2-1/doc/ru/v2-1/ref/reference/map.GeoObjects#methods-summary

const input = document.querySelector(".input");
const list = document.querySelector(".list");
// Функция ymaps.ready() будет вызвана, когда загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(() => {
  // метод добавления элемента на страницу
  const addItem = (elem) => {
    list.append(elem);
  };
  // метод создания элемента
  const createItem = (data) => {
    const item = document.createElement("div");
    item.innerText = data;
    addItem(item);
  };
  // метод поиска адресов
  const geocode = (address) => {
    // geocode - cтатическая функция, обрабатывающая запросы геокодирования
    ymaps.geocode(address).then((res) => {
      console.log(res);
      // GeoObjects - Коллекция геообъектов карты.
      // метод getLength - Возвращает длину коллекции.
      if (res.geoObjects.getLength() < 1) {
        // Если элементов в коллекции нет
        createItem("Ничего не найдено");
        return;
      }
      // метод each - для каждого дочернего геообъекта, вызывает функцию-обработчик.
      res.geoObjects.each((item) => {
        createItem(item.getAddressLine());
      });
    });
  };
  // функция обёртка (debounce) для слушателя событий, создающая задержку между запросами
  // https://zerowp.com/efficient-user-input-delay-in-javascript-typescript/
  const observeInput = () => {
    let timer;
    input.addEventListener("input", () => {
      // удаление слушателя
      clearTimeout(timer);
      // очищение содержимого перед новым запросом
      list.innerHTML = "";
      if (input.value.length) {
        timer = setTimeout(() => {
          // отправка данных для запроса
          geocode(input.value);
        }, 1000); // задержка запроса 1 сек
      }
    });
  };
  // вызов функции обёртки установки слушателя
  observeInput();
});

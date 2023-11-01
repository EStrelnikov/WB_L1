// 24 Разработайте страницу, отображающую таблицу с данными. Данные необходимо подгружать из этого источника.
// http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true
// Требования:
// данные должны загружаться при загрузке страницы
// необходимо реализовать сортировку по убыванию и по возрастания для всех колонок
//  необходимо реализовать клиентскую пагинацию (50 элементов на странице)

// Переменные для хранения данных и состояния пагинации
let data = [];
let sort = {
  fname: "asc",
  lname: "asc",
  tel: "asc",
  address: "asc",
  city: "asc",
  state: "asc",
  zip: "asc",
};
let currentPage = 1;
const itemsPerPage = 50;

// Функция для загрузки данных при загрузке страницы
// window.onload = function () {

// };

// Функция для отправки GET-запроса и получения данных
function fetchData() {
  fetch(
    "http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true"
  )
    .then((response) => response.json())
    .then((jsonData) => {
      data = jsonData;
      sortData("fname");
    });
}

// Функция для отображения данных в таблице
function renderTable() {
  const tableBody = document.getElementById("data-body");
  tableBody.innerHTML = "";
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  for (let i = 0; i < currentPageData.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${currentPageData[i].fname}</td>
      <td>${currentPageData[i].lname}</td>
      <td>${currentPageData[i].tel}</td>
      <td>${currentPageData[i].address}</td>
      <td>${currentPageData[i].city}</td>
      <td>${currentPageData[i].state}</td>
      <td>${currentPageData[i].zip}</td>
    `;
    tableBody.appendChild(row);
  }

  updatePagination();
}

// Функция для сортировки данных
function sortData(column) {
  sort[column] = sort[column] === "asc" ? "desc" : "asc";
  data.sort((a, b) => {
    if (a[column] < b[column]) {
      return sort[column] === "asc" ? 1 : -1;
    }
    if (a[column] > b[column]) {
      return sort[column] === "asc" ? -1 : 1;
    }
    return 0;
  });

  console.log(data);
  debugger;
  renderTable();
}

// Функция для обновления пагинации
function updatePagination() {
  const pageNumber = document.getElementById("page-number");
  pageNumber.innerText = currentPage;
}

// Функция для перехода на предыдущую страницу
function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
}

// Функция для перехода на следующую страницу
function nextPage() {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderTable();
  }
}

fetchData();

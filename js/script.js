/* Navbar #2 - Sticky Functioning */
const navbar = document.querySelector(".airpods-navbar");
const originalY = navbar.offsetTop; // 44

console.log(document.querySelector(".section-01").offsetTop);

window.addEventListener("scroll", () => {
  if (window.scrollY >= originalY) {
    navbar.classList.add("sticky");
    fetchData(); // Вызываем функцию для загрузки данных с API при прокрутке
  } else {
    navbar.classList.remove("sticky");
  }
});

/* ScrollMagic Controller */
let controller = new ScrollMagic.Controller();

// Функция для отправки GET-запроса к REST API
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data'); // Замените на ваш URL API
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json(); // Парсим JSON из ответа
    // Обработка полученных данных
    console.log('Data from API:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

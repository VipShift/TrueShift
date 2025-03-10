document.addEventListener("DOMContentLoaded", function () {
    // Находим все ссылки внутри <nav>
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Отменяем стандартный переход по ссылке

            const targetId = this.getAttribute("href").substring(1); // Получаем id секции
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Прокручиваем к секции (с учётом хедера)
                    behavior: "smooth" // Делаем прокрутку плавной
                });
            }
        });
    });
});


// Функция для показа секций при прокрутке
function revealSections() {
    const sections = document.querySelectorAll(".section"); // Находим все секции
    const windowHeight = window.innerHeight; // Высота окна браузера

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top; // Расстояние секции от верха окна

        if (sectionTop < windowHeight - 100) { // Если секция попадает в область видимости
            section.classList.add("show"); // Добавляем класс "show" (активируем анимацию)
        }
    });
}

// Запускаем функцию при загрузке страницы и при скролле
window.addEventListener("scroll", revealSections);
window.addEventListener("DOMContentLoaded", revealSections);


// Получаем кнопку
const scrollToTopBtn = document.getElementById("scrollToTop");

// Показываем кнопку при прокрутке вниз
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) { // Если прокрутили больше 300px
        scrollToTopBtn.classList.add("show"); // Добавляем класс "show"
    } else {
        scrollToTopBtn.classList.remove("show"); // Убираем класс
    }
});

// При клике прокручиваем вверх
scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Плавная прокрутка
    });
});

// Получаем хедер
const header = document.querySelector("header");

// Следим за скроллом страницы
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) { // Если прокрутили вниз больше 100px
        header.classList.add("scrolled"); // Добавляем прозрачность
    } else {
        header.classList.remove("scrolled"); // Убираем прозрачность
    }
});








document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const dotsContainer = document.querySelector(".dots");
    let index = 0;

    // Creează bulinele
    slides.forEach((_, idx) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", function () {
            index = idx;
            updateSlider();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    nextBtn.addEventListener("click", function () {
        index = (index + 1) % slides.length;
        updateSlider();
    });

    prevBtn.addEventListener("click", function () {
        index = (index - 1 + slides.length) % slides.length;
        updateSlider();
    });

    function resetSlider() {
        index = 0;
        updateSlider();
    }

    resetSlider();
});

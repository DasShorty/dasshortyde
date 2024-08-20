const slides = document.getElementsByClassName('slide');

const slideContent = [
    {
        "title": "Slide 1",
        "img": "Trainboard.png",
        "description": "This is the first slide"
    },
    {
        "title": "Slide 2",
        "img": "UniquePixels.png",
        "description": "This is the second slide"
    }
];

let currentSlide = 0;

function init() {
    const nextSlide = slides[currentSlide];
    nextSlide.classList.add('slide-active');
    nextSlide.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('../assets/slides/${slideContent[currentSlide].img}')`;

}

function nextSlide() {

    if (currentSlide === slides.length - 1) {
        return;
    }

    this.hideSlide(currentSlide);
    currentSlide = (currentSlide + 1) % slides.length;
    this.showSlide(currentSlide);

}

function showSlide(index) {
    const nextSlide = slides[index];
    nextSlide.classList.add('slide-active');
    nextSlide.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/slides/${slideContent[currentSlide].img}')`;
}

function hideSlide(index) {
    const preSlide = slides[index];
    preSlide.classList.remove('slide-active');
    preSlide.style.backgroundImage = `url('../assets/slides/${slideContent[currentSlide].img}')`;

}

function previousSlide() {

    if (currentSlide === 0) {
        return;
    }

    this.hideSlide(currentSlide);
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    this.showSlide(currentSlide);
}



document.addEventListener("DOMContentLoaded", () => {

    const wrapper = document.getElementById("slide-wrapper");

    slideContent.forEach((slide, index) => {
        const slideContentHTML = `
            <div class="slide-content">
                <h3>${slide.title}</h3>
                <p>${slide.description}</p>
            </div>
        `;

        const divStyle = `background-image: url('../assets/slides/${slide.img}');`;

        wrapper.innerHTML += `
            <div class="slide" style="${divStyle}">
                ${slideContentHTML}
            </div>
        `;
    });

    init();

});

document.addEventListener("keypress", (event) => {

    switch (event.key.toLowerCase()) {
        case "a":
            previousSlide();
            break;
        case "d":
            nextSlide();
            break;
    }

});
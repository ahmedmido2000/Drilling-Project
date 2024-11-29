const arrowLeft2 = document.querySelector('.slider-row-container-2 .arrow-left');
const arrowRight2 = document.querySelector('.slider-row-container-2 .arrow-right');
const slider2 = document.querySelector('.slider-2');
const cardWidth2 = document.querySelector('.slider-card-2').offsetWidth + 20; // Width + margin
let scrollAmount2 = 0;

arrowRight2.addEventListener('click', () => {
    const maxScroll2 = slider2.scrollWidth - slider2.offsetWidth; // Maximum scrollable width

    // Check if the scrollAmount2 + cardWidth2 doesn't exceed the maxScroll2
    if (scrollAmount2 + cardWidth2 <= maxScroll2) {
        scrollAmount2 += cardWidth2;
        slider2.style.transform = `translateX(-${scrollAmount2}px)`;
    }
});

arrowLeft2.addEventListener('click', () => {
    if (scrollAmount2 > 0) {
        scrollAmount2 -= cardWidth2;
        slider2.style.transform = `translateX(-${scrollAmount2}px)`;
    }
});
const arrowLeft3 = document.querySelector('.slider-row-container-3 .arrow-left');
const arrowRight3 = document.querySelector('.slider-row-container-3 .arrow-right');
const slider3 = document.querySelector('.slider-3');
const cardWidth3 = document.querySelector('.slider-card-3').offsetWidth + 20; // Width + margin
let scrollAmount3 = 0;

arrowRight3.addEventListener('click', () => {
    const maxScroll3 = slider3.scrollWidth - slider3.offsetWidth; // Maximum scrollable width

    // Check if the scrollAmount3 + cardWidth3 doesn't exceed the maxScroll3
    if (scrollAmount3 + cardWidth3 <= maxScroll3) {
        scrollAmount3 += cardWidth3;
        slider3.style.transform = `translateX(-${scrollAmount3}px)`;
    }
});


arrowLeft3.addEventListener('click', () => {
    if (scrollAmount3 > 0) {
        scrollAmount3 -= cardWidth3;
        slider3.style.transform = `translateX(-${scrollAmount3}px)`;
    }
});
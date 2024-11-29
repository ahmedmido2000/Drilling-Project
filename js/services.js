const arrowLeft = document.querySelector('.slider-row-container-1 .arrow-left');
const arrowRight = document.querySelector('.slider-row-container-1 .arrow-right');
const slider = document.querySelector('.slider-1');
const cardWidth = document.querySelector('.slider-card-1').offsetWidth + 20; // Width + margin
let scrollAmount = 0;

arrowRight.addEventListener('click', () => {
    const maxScroll = slider.scrollWidth - slider.offsetWidth; // Maximum scrollable width

    // Check if the scrollAmount + cardWidth doesn't exceed the maxScroll
    if (scrollAmount + cardWidth <= maxScroll) {
        scrollAmount += cardWidth;
        slider.style.transform = `translateX(-${scrollAmount}px)`;
    }
});
arrowLeft.addEventListener('click', () => {
    if (scrollAmount > 0) {
        scrollAmount -= cardWidth;
        slider.style.transform = `translateX(-${scrollAmount}px)`;
    }
});

function showServices(){
    document.querySelector(".services-container").classList.remove("d-none")
}
$(document).ready(function () {
    const $carouselTrack = $(".carousel-track");
    const $slides = $(".carousel-slide");
    const totalSlides = $slides.length;
    let currentIndex = 0;

    function updateSlidePosition() {
        const newTransformValue = -currentIndex * 100; // Move by 100% for each slide
        $carouselTrack.css("transform", `translateX(${newTransformValue}%)`);
    }

    // Next Button Event
    $(".next").on("click", function () {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first slide
        }
        updateSlidePosition();
    });

    // Prev Button Event
    $(".prev").on("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1; // Loop back to the last slide
        }
        updateSlidePosition();
    });
});

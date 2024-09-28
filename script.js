let slideIndex = 1;
showSlides(slideIndex);

// Auto slide every 3 seconds
setInterval(() => {
    showSlides(slideIndex += 1);
}, 3000); // Change slide every 3 seconds

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(${-(slideIndex - 1) * 100}%)`;
    }

    // Remove "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Add "active" class to the current dot
    dots[slideIndex - 1].className += " active";
}

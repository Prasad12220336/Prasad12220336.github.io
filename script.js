// Display an alert when the contact form is submitted
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (name && email && message) {
                // Here, you can handle form submission, e.g., send data to server
                alert(`Thank you, ${name}! Your message has been sent.`);
                contactForm.reset(); // Reset the form
            } else {
                alert("Please fill out all fields.");
            }
        });
    }
});

let slideIndex = 1;
showSlides(slideIndex);

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


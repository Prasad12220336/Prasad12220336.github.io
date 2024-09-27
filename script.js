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

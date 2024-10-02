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
        const ctxBar = document.getElementById('barChart').getContext('2d');
        const barChart = new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: ['Python', 'JavaScript', 'Java', 'C++', 'PHP'],
                datasets: [{
                    label: 'Demand (Jobs)',
                    data: [120, 150, 100, 80, 60],
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
                    hoverBorderColor: 'rgba(75, 192, 192, 1)'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        enabled: true,
                        mode: 'index',
                        intersect: false
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeOutBounce'
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Jobs'
                        }
                    }
                }
            }
        });

        const ctxPie = document.getElementById('pieChart').getContext('2d');
        const pieChart = new Chart(ctxPie, {
            type: 'pie',
            data: {
                labels: ['React', 'Angular', 'Vue', 'Other'],
                datasets: [{
                    label: 'Framework Usage',
                    data: [45, 30, 15, 10],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)'
                    ],
                    hoverOffset: 20,
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom'
                    },
                    tooltip: {
                        enabled: true
                    }
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });

const desktopAlert = document.getElementById('desktopAlert');
const instructions = document.getElementById('instructions');
const howToButton = document.getElementById('how-to-button');
const closeInstructionsButton = document.getElementById('close-instructions');
const dontShowAgainCheckbox = document.getElementById('dont-show-again');
const mainContent = document.querySelector('.main-content');

// Check for screen width and localStorage to handle the alert
if (window.innerWidth < 1024 && !localStorage.getItem('desktopAlertDismissed')) {
    desktopAlert.style.display = 'flex';
} else {
    // If screen width is larger or user has dismissed the alert
    mainContent.style.display = 'block';
}

// Event listener for "How?" button
howToButton.addEventListener('click', () => {
    desktopAlert.style.display = 'none'; // Hide the alert
    instructions.style.display = 'flex'; // Show the instructions
});

// Event listener for "Close" button in instructions
closeInstructionsButton.addEventListener('click', () => {
    instructions.style.display = 'none'; // Hide the instructions
    desktopAlert.style.display = 'flex'; // Show the alert again
});

// Event listener for "Don't show again" checkbox
dontShowAgainCheckbox.addEventListener('change', (event) => {
    if (event.target.checked) {
        localStorage.setItem('desktopAlertDismissed', 'true');
        desktopAlert.style.display = 'none'; // Hide the alert
        instructions.style.display = 'none'; // Hide the instructions if open
        mainContent.style.display = 'block'; // Show the main content
    }
});

// Handle screen resize events
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        // Hide the alert and show the main content when the user switches to desktop mode
        desktopAlert.style.display = 'none';
        mainContent.style.display = 'block';
    } else if (!localStorage.getItem('desktopAlertDismissed')) {
        // Show the alert again if the user switches back to a smaller screen
        desktopAlert.style.display = 'flex';
        mainContent.style.display = 'none';
    }
});

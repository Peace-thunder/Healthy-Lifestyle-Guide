// Function to show the selected section (Diet or Exercise)
function showSection(section) {
    var dietSection = document.getElementById('diet');
    var exerciseSection = document.getElementById('exercise');

    dietSection.style.display = 'none';
    exerciseSection.style.display = 'none';

    dietSection.classList.remove('fadeIn');
    exerciseSection.classList.remove('fadeIn');

    if (section === 'diet') {
        dietSection.style.display = 'block';
        dietSection.classList.add('fadeIn');
    } else if (section === 'exercise') {
        exerciseSection.style.display = 'block';
        exerciseSection.classList.add('fadeIn');
    }
}

// Function to show the selected day's exercise plan
function showExercise(day) {
    var days = document.getElementsByClassName('workout-day');
    for (var i = 0; i < days.length; i++) {
        days[i].style.display = 'none';
        days[i].classList.remove('fadeIn');
    }

    var selectedDay = document.getElementById(day);
    selectedDay.style.display = 'block';
    selectedDay.classList.add('fadeIn');
}

// Event listener for navigation links
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var section = event.target.getAttribute('onclick').replace('showSection(', '').replace(')', '').replace(/'/g, '');
            showSection(section);
        });
    });

    // Show the Diet section by default on page load
    showSection('diet');
});

// Event listener for exercise day buttons
document.addEventListener('DOMContentLoaded', function() {
    var dayButtons = document.querySelectorAll('.days button');
    dayButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var day = event.target.getAttribute('onclick').replace('showExercise(', '').replace(')', '').replace(/'/g, '');
            showExercise(day);
        });
    });

    // Show Monday's exercise plan by default on page load
    showExercise('monday');
});
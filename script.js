"use strict";
const toggleButton = document.getElementById('button');
const skillsDiv = document.getElementById('skills');
// Add a click event listener to the button
toggleButton.addEventListener('click', () => {
    // Toggle the display style of the skills div
    if (skillsDiv.style.display === 'none') {
        skillsDiv.style.display = 'block';
        toggleButton.textContent = 'Hide Skills'; // Change button text
    }
    else {
        skillsDiv.style.display = 'none';
        toggleButton.textContent = 'Show Skills'; // Change button text
    }
});

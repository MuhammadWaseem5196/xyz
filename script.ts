// Select the button and skills div elements with proper TypeScript types
const toggleButton = document.getElementById('button') as HTMLButtonElement;
const skillsDiv = document.getElementById('skills') as HTMLDivElement;

// Add a click event listener to the button
toggleButton.addEventListener('click', () => {
    // Toggle the display style of the skills div
    if (skillsDiv.style.display === 'none' || skillsDiv.style.display === '') {
        skillsDiv.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';  // Change button text
    } else {
        skillsDiv.style.display = 'none';
        toggleButton.textContent = 'Show Skills';  // Change button text
    }
});

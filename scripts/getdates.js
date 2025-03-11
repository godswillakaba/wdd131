// Get the current year
let currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Set the last modified date
let lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = "Last Modified: " + lastModifiedDate;

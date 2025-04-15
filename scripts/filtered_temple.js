
// Get the current year
let currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Set the last modified date
let lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = "Last Modified: " + lastModifiedDate;



document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger");
    const nav = document.querySelector("header nav");

    // Toggle menu when clicking on the hamburger
    hamburgerMenu.addEventListener("click", function () {
        nav.classList.toggle("active");
        hamburgerMenu.textContent = nav.classList.contains("active") ? "✖" : "☰"; // Change icon
    });

    // Close menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!hamburgerMenu.contains(event.target) && !nav.contains(event.target)) {
            nav.classList.remove("active");
            hamburgerMenu.textContent = "☰"; // Reset to hamburger icon
        }
    });
});
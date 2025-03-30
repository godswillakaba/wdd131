// Get the current year
let currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Set the last modified date
let lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = "Last Modified: " + lastModifiedDate;




// Define static values
const temperature = 5; // in Celsius
const condition = "Cloudy"; // Weather condition

// Function to calculate wind chill based on assumed light wind (5 km/h)
function calculateWindChill(temp) {
    const windSpeed = 5; // Assume a slight breeze (5 km/h)
    
    if (temp <= 10) { // Wind chill formula is valid below 10°C
        return (
            13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(2) + "°C";
    } else {
        return "N/A"; // Wind chill is not applicable
    }
}

// Display the calculated wind chill in the page
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".wind-chill").textContent = calculateWindChill(temperature);
});
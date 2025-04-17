// Product array
const products = [
    { id: 1, name: "Lawn Mower" },
    { id: 2, name: "Garden Hose" },
    { id: 3, name: "Sprinkler System" },
    { id: 4, name: "Fertilizer" },
    { id: 5, name: "Weed Trimmer" }
];

// Populate product options dynamically
const productSelect = document.getElementById("productName");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});


// Get the current year
let currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Set the last modified date
let lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = "Last Modified: " + lastModifiedDate;


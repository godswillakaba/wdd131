



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


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17000,
        imageUrl: 
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },



    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },

    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52590,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      }

    
    // Add more temple objects here...
  ];  


  temples.forEach((temple) => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

  
    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
    `;
  
    document.getElementById("templeCards").appendChild(card);
  });


  temples.forEach((temple) => {
    const card = document.createElement("div");
    card.classList.add("temple-card");
  
    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;
  
    document.getElementById("templeCards").appendChild(card);
  });
  
  
  
  function displayTemples(templesToDisplay) {
    const container = document.getElementById("templeCards");
    container.innerHTML = ""; // Clear previous cards
  
    templesToDisplay.forEach((temple) => {
      const card = document.createElement("div");
      card.classList.add("temple-card");
  
      card.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;
  
      container.appendChild(card);
    });
  }
  
  document.getElementById("home").addEventListener("click", () => {
    displayTemples(temples);
  });
  
  document.getElementById("old").addEventListener("click", () => {
    const oldTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
    displayTemples(oldTemples);
  });
  
  document.getElementById("new").addEventListener("click", () => {
    const newTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
    displayTemples(newTemples);
  });
  
  document.getElementById("large").addEventListener("click", () => {
    const largeTemples = temples.filter(t => t.area > 90000);
    displayTemples(largeTemples);
  });
  
  document.getElementById("small").addEventListener("click", () => {
    const smallTemples = temples.filter(t => t.area < 10000);
    displayTemples(smallTemples);
  });





  
  
  
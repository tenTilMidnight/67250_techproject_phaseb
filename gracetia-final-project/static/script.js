var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function SumnPrint(x1, x2) {
  var result = x1 + x2;
  console.log(result);
}

SumnPrint(x, y);
SumnPrint(A, B);

if (C.length > z) {
  console.log(C);
} else if (C.length < z) {
  console.log(z);
} else {
  console.log("good job!");
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Banana") {
      alert("Banana found!");
    }
  }
}

function findTheBananaForEach(arr) {
  arr.forEach(function(item) {
    if (item === "Banana") {
      alert("Banana found!");
    }
  });
}

var now = new Date();
var hour = now.getHours();

function greeting(h) {
  var greetingElement = document.getElementById("greeting");

  if (!greetingElement) {
    return;
  }

  if (h < 5 || h >= 20) {
    greetingElement.innerHTML = "Hi there, night owl!";
  } else if (h < 12) {
    greetingElement.innerHTML = "Good morning!";
  } else if (h < 18) {
    greetingElement.innerHTML = "Good afternoon!";
  } else {
    greetingElement.innerHTML = "Good evening!";
  }
}

greeting(hour);

function addYear() {
  var yearElement = document.getElementById("copyYear");

  if (yearElement) {
    yearElement.innerHTML = "&copy; " + new Date().getFullYear() + " MonoMuse. All rights reserved.";
  }
}

function activeNav() {
  var currentPage = window.location.pathname.split("/").pop();
  var navLinks = document.querySelectorAll("nav a");

  if (currentPage === "") {
    currentPage = "index.html";
  }

  navLinks.forEach(function(link) {
    var linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

activeNav();

function showTicketOptions(selectedDate) {
  var ticketBox = document.getElementById("ticketOptions");
  var dateField = document.getElementById("selectedDate");

  if (ticketBox) {
    ticketBox.style.display = "block";
  }

  if (dateField && selectedDate) {
    dateField.value = selectedDate;
  }
}

function formatTotal(amount) {
  return amount.toFixed(2);
}

function getTicketPrice(ticketType) {
  var prices = {
    General: 18,
    Student: 10,
    Member: 15,
    Children: 0
  };
  return prices[ticketType] !== undefined ? prices[ticketType] : 18;
}

function updateTotal() {
  var ticketTypeField = document.getElementById('ticketType');
  var quantityField = document.getElementById('quantity');
  var totalPrice = document.getElementById('totalPrice');
  if (!ticketTypeField || !quantityField || !totalPrice) {
    return;
  }

  var ticketType = ticketTypeField.value;
  var quantity = parseInt(quantityField.value, 10);
  if (isNaN(quantity) || quantity < 1) {
    quantity = 1;
    quantityField.value = 1;
  }

  if (quantity > 10) {
    quantity = 10;
    quantityField.value = 10;
  }

  var price = getTicketPrice(ticketType);
  var total = quantity * price;
  totalPrice.textContent = formatTotal(total);
}

function showFormErrors(errors) {
  var errorContainer = document.getElementById('formErrors');
  if (!errorContainer) {
    return;
  }

  if (errors.length === 0) {
    errorContainer.innerHTML = '';
    return;
  }

  var html = '<ul>' + errors.map(function(error) {
    return '<li>' + error + '</li>';
  }).join('') + '</ul>';
  errorContainer.innerHTML = html;
}

function submitPurchase(event) {
  if (event) {
    event.preventDefault();
  }

  var fullName = document.getElementById('fullName').value.trim();
  var visitDate = document.getElementById('visitDate').value;
  var ticketType = document.getElementById('ticketType').value;
  var quantity = parseInt(document.getElementById('quantity').value, 10);
  var email = document.getElementById('email').value.trim();
  var zipCode = document.getElementById('zipCode').value.trim();
  var mailingList = document.getElementById('mailingList').checked;
  var errors = [];

  if (!fullName) {
    errors.push('Please enter your name.');
  }

  if (!visitDate) {
    errors.push('Please choose a visit date.');
  }

  if (!ticketType) {
    errors.push('Please select a ticket type.');
  }

  if (isNaN(quantity) || quantity < 1 || quantity > 10) {
    errors.push('Ticket quantity must be between 1 and 10.');
  }

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    errors.push('Please enter a valid email address.');
  }

  if (zipCode && !/^\d{5}$/.test(zipCode)) {
    errors.push('Zip code must be a 5-digit number if provided.');
  }

  showFormErrors(errors);

  if (errors.length > 0) {
    return false;
  }

  var total = quantity * getTicketPrice(ticketType);
  var params = new URLSearchParams({
    fullName: fullName,
    visitDate: visitDate,
    ticketType: ticketType,
    quantity: quantity,
    email: email,
    zipCode: zipCode,
    mailingList: mailingList ? 'Yes' : 'No',
    total: formatTotal(total)
  });

  alert("Redirecting to payment system.");
  window.location.href = 'confirmation.html?' + params.toString();
  return false;
}

function setupTicketPage() {
  var quantityField = document.getElementById('quantity');
  var ticketTypeField = document.getElementById('ticketType');
  var ticketForm = document.getElementById('ticketForm');

  if (quantityField) {
    quantityField.addEventListener('input', updateTotal);
  }

  if (ticketTypeField) {
    ticketTypeField.addEventListener('change', updateTotal);
  }

  if (ticketForm) {
    ticketForm.addEventListener('submit', submitPurchase);
  }

  updateTotal();
}

window.addEventListener('DOMContentLoaded', setupTicketPage);

if (window.jQuery) {
  $(function() {
    if ($("#readMore").length && $("#readLess").length && $("#longIntro").length) {
      $("#readLess").hide();
      $("#longIntro").hide();

      $("#readMore").click(function() {
        $("#longIntro").slideDown();
        $("#readLess").show();
        $("#readMore").hide();
      });

      $("#readLess").click(function() {
        $("#longIntro").slideUp();
        $("#readLess").hide();
        $("#readMore").show();
      });
    }
  });
}

// Hamburger Menu Toggle
function toggleHamburgerMenu() {
  var navBar = document.querySelector(".nav_bar");
  if (navBar) {
    navBar.classList.toggle("responsive");
  }
}

var hamburgerBtn = document.getElementById("hamburger-menu");
if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", toggleHamburgerMenu);
}

// Leaflet Map Initialization
function initializeMap() {
  var mapContainer = document.getElementById("map");
  if (mapContainer) {
    // Create map
    var map = L.map('map').setView([40.4426, -79.9426], 13);
    
    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(map);
    
    // Add marker for museum location
    L.marker([40.4426, -79.9426]).addTo(map)
      .bindPopup('<b>MonoMuse Museum</b><br>Pittsburgh, PA')
      .openPopup();
  }
}

// Initialize map when page loads
window.addEventListener('load', function() {
  initializeMap();
});

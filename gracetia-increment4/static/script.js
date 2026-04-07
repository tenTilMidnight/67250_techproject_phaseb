var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function sumPrint(x1, x2) {
  var result = x1 + x2;
  console.log(result);
}

sumPrint(x, y);
sumPrint(A, B);

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
    greetingElement.innerHTML = "Good night";
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

function submitPurchase(event) {
  if (event) {
    event.preventDefault();
  }

  alert("Redirecting to payment system.");
  return false;
}

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

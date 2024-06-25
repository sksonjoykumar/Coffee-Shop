// Search JS
const searchBtn = document.getElementById("searchBtn");
const form = document.getElementById("form");
const closeBtn = document.getElementById("closeBtn1");

if (searchBtn) {
  searchBtn.addEventListener("click", function () {
    form.style.display = "block";
    searchBtn.style.display = "none";
    closeBtn.style.display = "block";
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", function () {
    form.style.display = "none";
    closeBtn.style.display = "none";
    searchBtn.style.display = "block";
  });
}

// Responsive Design JS
const barBtn = document.getElementById("barBtn");
const closeBtn2 = document.getElementById("closeBtn");
const navContent = document.getElementById("nav-content");


if (barBtn) {
  barBtn.addEventListener("click", function () {
    navContent.classList.add("active");
    barBtn.style.display = "none";
    closeBtn2.style.display = "block";
  });
}

if (closeBtn2) {
  closeBtn2.addEventListener("click", function () {
    navContent.classList.remove("active");
    closeBtn2.style.display = "none";
    barBtn.style.display = "block";
  });
}

// Product Page JS
const allImg = document.querySelectorAll("#img");
const mainImg = document.getElementById("main-img");

allImg.forEach(function (evt) {
  evt.addEventListener("click", function () {
    mainImg.src = evt.src;
  });
});

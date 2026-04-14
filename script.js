/* ===== DATA ===== */
var tops = [
  { name: "Fleur Top Vol 1", price: 135000, image: "assets/images/fleur-front.png" },
  { name: "Petal Knit Top", price: 135000, image: "assets/images/petal-front.png" }
];
var bottoms = [
  { name: "Denim Jeans" },
  { name: "Pleated Skirt" },
  { name: "Wide Trousers" },
  { name: "Cargo Pants" }
];
var selectedTop = 0;
var selectedBottom = 0;

/* ===== NAVBAR ===== */
document.getElementById("menuToggle").addEventListener("click", function () {
  document.getElementById("mobileMenu").classList.toggle("open");
});
document.querySelectorAll(".mobile-menu a").forEach(function (a) {
  a.addEventListener("click", function () {
    document.getElementById("mobileMenu").classList.remove("open");
  });
});

/* ===== PRODUCT GALLERY ===== */
function changeImg(imgId, thumb, src) {
  document.getElementById(imgId).src = src;
  var siblings = thumb.parentElement.querySelectorAll(".thumb");
  siblings.forEach(function (t) { t.classList.remove("active"); });
  thumb.classList.add("active");
}

/* ===== MIX & MATCH ===== */
function updateMM() {
  var top = tops[selectedTop];
  var bottom = bottoms[selectedBottom];
  var total = top.price + 0;
  var formatted = "Rp" + total.toLocaleString("id-ID");

  document.getElementById("mmPreviewImg").src = top.image;
  document.getElementById("mmPreviewLabel").textContent = top.name + " + " + bottom.name;
  document.getElementById("mmTotal").textContent = formatted;
  document.getElementById("mmTotal2").textContent = formatted;
  document.getElementById("mmTopName").textContent = top.name;
  document.getElementById("mmBottomName").textContent = bottom.name;
  document.getElementById("mmWhatsApp").href =
    "https://wa.me/6281529967188?text=" +
    encodeURIComponent("Halo, saya tertarik dengan outfit: " + top.name + " + " + bottom.name);
}

function selectTop(i) {
  selectedTop = i;
  document.querySelectorAll("#topOptions .mm-option").forEach(function (el, idx) {
    el.classList.toggle("selected", idx === i);
  });
  updateMM();
}

function selectBottom(i) {
  selectedBottom = i;
  document.querySelectorAll("#bottomOptions .mm-bottom").forEach(function (el, idx) {
    el.classList.toggle("selected", idx === i);
  });
  updateMM();
}

function resetMM() {
  selectTop(0);
  selectBottom(0);
}

/* ===== SCROLL ANIMATIONS ===== */
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-in").forEach(function (el) {
  observer.observe(el);
});

/* ===== NAVBAR SCROLL ===== */
var navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 2px 16px rgba(0,0,0,.06)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

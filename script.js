// Button click event
document.getElementById("magicBtn").addEventListener("click", function () {
  this.textContent = "Clicked!";
  this.style.backgroundColor = "lightgreen";
});

// Hover effect
document.getElementById("magicBtn").addEventListener("mouseover", function () {
  this.style.transform = "scale(1.1)";
});
document.getElementById("magicBtn").addEventListener("mouseout", function () {
  this.style.transform = "scale(1)";
});

// Keypress detection
document.addEventListener("keypress", function (e) {
  document.getElementById("keyOutput").textContent = `You typed: ${e.key}`;
});

// Tabs
document.querySelectorAll(".tab").forEach((tab) =>
  tab.addEventListener("click", function () {
    const tabId = this.dataset.tab;
    document.querySelectorAll(".tab-content").forEach((el) => {
      el.style.display = "none";
    });
    document.getElementById(tabId).style.display = "block";
  })
);

// Image switcher
const imgUrls = [
  "https://via.placeholder.com/200/FF0000",
  "https://via.placeholder.com/200/00FF00",
  "https://via.placeholder.com/200/0000FF",
];
let currentImg = 0;
document.getElementById("changeImg").addEventListener("click", function () {
  currentImg = (currentImg + 1) % imgUrls.length;
  document.getElementById("galleryImg").src = imgUrls[currentImg];
});

// Double-click bonus
document.getElementById("galleryImg").addEventListener("dblclick", () => {
  alert("You double-clicked the image! 🎉");
});

// Form validation
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const feedback = document.getElementById("formFeedback");

  if (!name || !email || password.length < 8) {
    feedback.textContent = "Please fill all fields correctly.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Form submitted successfully!";
    feedback.style.color = "green";
  }
});

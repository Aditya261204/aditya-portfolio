// index.js

function getGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting = "";

  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 17) {
    greeting = "Good Afternoon!";
  } else if (hour < 21) {
    greeting = "Good Evening!";
  } else {
    greeting = "Good Night!";
  }

  document.getElementById("greeting").textContent = greeting;
}

window.onload = getGreeting;

// Highlight current nav item while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

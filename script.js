
// 1. Typing animation

const typingText = document.getElementById("typing");

const words = [
    "Web Developer 💻",
    "B.Tech IT Student 🎓",
    "Java Programmer ☕",
    "Creative Learner ✨"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1200;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// 2. Dark and Light Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});


// 3. Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");

    menuBtn.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});


// Close menu after clicking a navigation link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

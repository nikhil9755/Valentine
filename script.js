// PERSONALIZE NAME
const herName = "Sangeeta";
document.querySelector("#proposal-screen h1").innerText =
    `Will You Be My Valentine, ${herName}? 💖`;

// Music
const music = document.getElementById("bg-music");

// Start button
document.getElementById("start-btn").addEventListener("click", () => {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("proposal-screen").classList.remove("hidden");
    music.play().catch(() => {});
});

// YES button
document.getElementById("yes-btn").addEventListener("click", () => {
    document.getElementById("proposal-screen").classList.add("hidden");
    document.getElementById("celebration-screen").classList.remove("hidden");

    music.play().catch(() => {});

    confetti({
        particleCount: 250,
        spread: 120,
        origin: { y: 0.6 }
    });
});

// NO button runs away
const noBtn = document.getElementById("no-btn");
noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// Floating hearts
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";
    document.getElementById("hearts-container").appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
}, 400);

// Carousel
const slides = document.querySelectorAll(".carousel-img");
let currentSlide = 0;

setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}, 3000);

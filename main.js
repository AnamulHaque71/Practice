document.addEventListener("DOMContentLoaded", function() {
    // Check if .text element is available before initializing Typed.js
    var typed = new Typed(".text", {
        strings: [" Frontend Developer", " Teacher", " Data Scientist"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

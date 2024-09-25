const themeToggle = document.getElementById("theme-toggle");
const icon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
});

// Function to auto-scroll the presentation carousel
const carousel = document.querySelector(".presentation-carousel");
let scrollInterval;

function startCarousel() {
  scrollInterval = setInterval(() => {
    carousel.scrollBy({ left: 200, behavior: "smooth" });

    // If reached the end, scroll back to the start
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, 3000); // Adjust the interval time here
}

// Stop the carousel on mouse enter and restart on mouse leave
carousel.addEventListener("mouseenter", () => clearInterval(scrollInterval));
carousel.addEventListener("mouseleave", startCarousel);

// Start the carousel on page load
startCarousel();

const presentationList = document.querySelector(".presentation-list");
const totalWidth = presentationList.scrollWidth; // Total width of the presentation list

function resetScroll() {
  presentationList.style.transform = "translateX(0)"; // Reset position
  presentationList.offsetHeight; // Trigger reflow
  presentationList.style.transition = "none"; // Disable transition for immediate reset
  requestAnimationFrame(() => {
    presentationList.style.transition = "transform 30s linear"; // Re-enable transition
    presentationList.style.transform = `translateX(-${totalWidth / 2}px)`; // Start scrolling
  });
}

// Trigger the reset when the animation ends
presentationList.addEventListener("transitionend", resetScroll);

// Start the initial scroll
resetScroll();

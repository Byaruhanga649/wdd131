// Get the current review count from localStorage
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increase the count
reviewCount++;

// Save the updated count
localStorage.setItem("reviewCount", reviewCount);

// Display the count on the page
document.getElementById("reviewCount").textContent = reviewCount;
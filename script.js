/**
 * BrewNest Cafe - Interactive Mechanics
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Table Booking Form Handling
    const bookingForm = document.querySelector(".booking-form");

    if (bookingForm) {
        bookingForm.addEventListener("submit", (event) => {
            // Standard submit reload ko rokne ke liye
            event.preventDefault();

            // Form inputs se values extract karna
            const phone = document.getElementById("contact-number").value;
            const date = document.getElementById("booking-date").value;
            const guests = document.getElementById("guests-count").value;

            // Ek unique simulation alert create karna
            alert(`🎉 Success! Your table at BrewNest Cafe has been requested.\n\n📅 Date: ${date}\n👥 Guests: ${guests}\n📞 Contact: ${phone}\n\nWe will send a confirmation SMS shortly!`);
            
            // Success ke baad form clean karne ke liye
            bookingForm.reset();
        });
    }

    // 2. Interactive Effect: Hover Highlight for Menu Cards
    const menuCards = document.querySelectorAll(".menu-card");
    menuCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.borderColor = "#8b5a2b";
        });
        card.addEventListener("mouseleave", () => {
            card.style.borderColor = "#e6dfd5";
        });
    });
});

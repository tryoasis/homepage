document.addEventListener("DOMContentLoaded", function() {
    // Check if the user has visited before
    if (!localStorage.getItem("popupDisplayed")) {
        // Display the pop-up on the first scroll
        window.addEventListener("scroll", showPopup);
    }

    function showPopup() {
        // Show the pop-up and overlay
        const popup = document.querySelector(".popup");
        popup.style.display = "block";

        const overlay = document.querySelector(".overlay");
        overlay.style.display = "block";

        // Remove the scroll event listener after displaying the pop-up
        window.removeEventListener("scroll", showPopup);

        // Set a flag in localStorage to indicate that the pop-up has been displayed
        localStorage.setItem("popupDisplayed", "true");

        // Set a timer to reset the flag after two weeks
        setTimeout(function() {
            localStorage.removeItem("popupDisplayed");
        }, 2 * 7 * 24 * 60 * 60 * 1000); // Two weeks in milliseconds
    }

    // Close the pop-up and overlay when clicking outside the pop-up
    const overlay = document.querySelector(".overlay");
    overlay.addEventListener("click", closePopup);

    // Close the pop-up and overlay when clicking the close button
    const closeButton = document.querySelector(".close-button");
    closeButton.addEventListener("click", closePopup);

    function closePopup() {
        const popup = document.querySelector(".popup");
        popup.style.display = "none";

        overlay.style.display = "none";
    }
});

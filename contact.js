document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".c-pop-img img");
    const texts = document.querySelectorAll(".c-pop-img-conts p");
    const dots = document.querySelectorAll(".c-dots");

    let currentIndex = 0;

    // Function to update the slider
    const updateSlider = (index) => {
        // Reset all elements
        images.forEach((img) => img.classList.remove("active"));
        texts.forEach((text) => text.classList.remove("active"));
        dots.forEach((dot) => dot.classList.remove("c-dot-current"));

        // Set active elements
        images[index].classList.add("active");
        texts[index].classList.add("active");
        dots[index].classList.add("c-dot-current");
    };

    // Auto-slide functionality
    const startSlider = () => {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider(currentIndex);
        }, 3000); // Change every 3 seconds
    };

    // Initialize the slider
    updateSlider(currentIndex);
    startSlider();
});

document.addEventListener("DOMContentLoaded", () => {
    const popup = document.querySelector(".c-pop");
    const closeBtn = document.querySelector(".c-pop-close");
    const form = document.querySelector(".c-pop-form form");
    let isFormDirty = false;

    // Detect changes in form fields
    form.addEventListener("input", () => {
        isFormDirty = true;
    });

    // Close the popup with confirmation if form is dirty
    closeBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default link behavior
        if (isFormDirty) {
            const confirmClose = confirm("You have unsaved changes. Are you sure you want to close?");
            if (!confirmClose) {
                return; // Do nothing if the user cancels
            }
        }
        popup.classList.add("c-pop-hidden"); // Close the popup
        isFormDirty = false; // Reset form state
    });

    // Show the popup after 5 seconds
    setTimeout(() => {
        popup.classList.remove("c-pop-hidden");
    }, 5000);
});

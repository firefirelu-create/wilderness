const navigationLinks = document.querySelectorAll("nav a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navigationLinks.forEach((navigationLink) => {
            navigationLink.classList.remove("active");
        });

        link.classList.add("active");
    });
});

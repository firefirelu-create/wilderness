const navigationLinks = document.querySelectorAll("nav a");
const yearNode = document.getElementById("year");

if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
}

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navigationLinks.forEach((navigationLink) => {
            navigationLink.classList.remove("active");
        });

        link.classList.add("active");
    });
});

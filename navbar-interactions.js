document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const dropdownItems = document.querySelectorAll(".dropdown-menu li");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        dropdownItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

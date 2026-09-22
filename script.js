document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll(".page-section");
    const logo = document.getElementById("logo");
    const yearSpan = document.getElementById("year");

    yearSpan.textContent = new Date().getFullYear();

    // Core switching function
    function navigateTo(pageId, pushState = true) {
        // 1. Toggle Section visibility
        sections.forEach(section => {
            if (section.id === pageId) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });

        // 2. Toggle navigation highlight
        navItems.forEach(item => {
            if (item.getAttribute("data-page") === pageId) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        // Modify the browser address bar URL using JS (without triggering a page reload)
        if (pushState) {
            const newUrl = pageId === "home" ? "index.html" : `${pageId}.html`;
            history.pushState({ page: pageId }, "", newUrl);
        }
    }

    // Click to toggle navigation
    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault(); //Prevent the default hyperlink navigation.
            const targetPage = item.getAttribute("data-page");
            navigateTo(targetPage);
        });
    });

    // Click Logo Back to Home page
    logo.addEventListener("click", () => {
        navigateTo("home");
    });

    // Supports browser forward/back buttons.
    window.addEventListener("popstate", (e) => {
        if (e.state && e.state.page) {
            navigateTo(e.state.page, false);
        } else {
            navigateTo("home", false);
        }
    });
});

    document.addEventListener("DOMContentLoaded", function() {
        AOS.init();
    
        const navbar = document.querySelector(".navbar-custom");
        const engButton = document.getElementById("engButton");
        const indButton = document.getElementById("indButton");
    
        function toggleOutline(element) {
        element.classList.toggle('outlined');
        }
    
        function toggleLanguage(button) {
        engButton.classList.remove("active");
        indButton.classList.remove("active");
        button.classList.add("active");
    
        if (button === engButton) {
            window.location.href = '/';
        } else if (button === indButton) {
            window.location.href = '/indo';
        }
        }
    
        function addScrolledClass() {
        if (window.scrollY > 1) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
        }
    
        navbar.addEventListener("mouseover", function() {
        navbar.classList.add("scrolled");
        });
    
        navbar.addEventListener("mouseout", function() {
        if (window.scrollY <= 1) {
            navbar.classList.remove("scrolled");
        }
        });
    
    
        window.addEventListener("load", function () {
        navbar.classList.remove("scrolled");
        addScrolledClass();
        });
    
        window.addEventListener("scroll", function () {
        addScrolledClass();
        });
    
        engButton.addEventListener("click", function () {
        toggleLanguage(engButton);
        });
    
        indButton.addEventListener("click", function () {
        toggleLanguage(indButton);
        });
    
    });

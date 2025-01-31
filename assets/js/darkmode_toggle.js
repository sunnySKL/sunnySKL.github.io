document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Dark Mode";
    toggleButton.classList.add("button");
    toggleButton.style.position = "fixed";
    toggleButton.style.bottom = "20px";
    toggleButton.style.right = "20px";
    
    document.body.appendChild(toggleButton);
    
    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    });
    
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
});


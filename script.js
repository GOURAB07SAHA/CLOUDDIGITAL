// JavaScript can be added here if you need interactivity
console.log("Website loaded successfully");
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login functionality not yet implemented!");
});
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent!");
    // You can add functionality to actually send data here, such as using Fetch API
});
document.getElementById("search-button").addEventListener("click", function() {
    var searchTerm = document.getElementById("search-input").value.toLowerCase();
    var content = document.querySelectorAll(".searchable");
    content.forEach(function(item) {
        if (item.textContent.toLowerCase().includes(searchTerm)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});
function scanFile(event) {
    const file = event.target.files[0];
    if (file) {
        alert("File selected: " + file.name);
        // You can add functionality here to process or scan the file
    }
}
function scanFile(event) {
    const file = event.target.files[0];
    if (file) {
        alert("File selected: " + file.name);
        // You can add functionality here to process or scan the file
    }
}

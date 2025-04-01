function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("overlay");
    var menuToggle = document.querySelector(".menu-toggle");

    sidebar.classList.toggle("open");
    overlay.style.display = sidebar.classList.contains("open") ? "block" : "none";
    
    // Sembunyikan tombol menu saat sidebar terbuka
    if (sidebar.classList.contains("open")) {
        menuToggle.classList.add("hide");
    } else {
        menuToggle.classList.remove("hide");
    }
}

function closeMenu() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("overlay");
    var menuToggle = document.querySelector(".menu-toggle");

    sidebar.classList.remove("open");
    overlay.style.display = "none";
    
    // Tampilkan kembali tombol menu saat sidebar tertutup
    menuToggle.classList.remove("hide");
}
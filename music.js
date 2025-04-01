document.addEventListener("DOMContentLoaded", function() {
    var music = document.getElementById("bg-music");

    var playMusic = () => {
        music.muted = true; // Start dengan mute
        music.play().then(() => {
            music.muted = false; // Unmute setelah play sukses
        }).catch(error => {
            console.log("Autoplay dicegah, menunggu interaksi...");
        });
    };

    // Cek apakah musik sudah dimulai, jika belum, mulai musik
    if (!sessionStorage.getItem("musicStarted")) {
        // Coba langsung play saat halaman dimuat
        playMusic();
        // Tandai musik sudah dimulai
        sessionStorage.setItem("musicStarted", "true");
    }

    // Kalau autoplay dicegah, coba lagi saat user pertama kali klik layar
    document.addEventListener("click", function() {
        playMusic();
    }, { once: true });

    // Tambahan untuk perangkat mobile (sentuhan pertama)
    document.addEventListener("touchstart", function() {
        playMusic();
    }, { once: true });

    // Tambahan: Mengecek apakah iframe musik sudah ada, kalau belum buat iframe
    if (!document.getElementById("music-frame")) {
        let iframe = document.createElement("iframe");
        iframe.src = "music.html"; 
        iframe.style.display = "none";
        iframe.id = "music-frame";
        document.body.appendChild(iframe);
    }
});
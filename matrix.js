const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Sesuaikan ukuran canvas dengan layar
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
const charArray = characters.split("");
const fontSize = 16;
const columns = canvas.width / fontSize;

// Simpan posisi y tiap kolom
const drops = Array.from({ length: columns }).map(() => Math.random() * canvas.height);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#0f0"; // Warna hijau khas Matrix
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Jalankan animasi
setInterval(drawMatrix, 50);

// Resize canvas saat layar berubah
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
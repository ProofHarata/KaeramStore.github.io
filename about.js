// Menangani popup promo
document.addEventListener("DOMContentLoaded", () => {
    const promoBtn = document.getElementById("promo-btn");
    const promoPopup = document.getElementById("promo-popup");
    const closeBtn = document.getElementById("close-btn");
    const claimPromo = document.getElementById("claim-promo");

    // Tampilkan popup
    promoBtn.addEventListener("click", () => {
        promoPopup.style.display = "flex";
    });

    // Tutup popup
    closeBtn.addEventListener("click", () => {
        promoPopup.style.display = "none";
    });

    // Tutup popup jika area luar diklik
    window.addEventListener("click", (e) => {
        if (e.target === promoPopup) {
            promoPopup.style.display = "none";
        }
    });

    // Klaim promo (contoh fungsi)
    claimPromo.addEventListener("click", () => {
        alert("Promo berhasil diklaim! Selamat berbelanja.");
        promoPopup.style.display = "none";
    });
});

// Ambil elemen tombol dan surat
const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
const btnMusicElement = document.querySelector('#toggleMusic');
const bgMusic = document.querySelector('#bgMusic');

// Matikan tombol close saat awal
btnCloseElement.disabled = true;

// Event tombol buka surat
btnOpenElement.addEventListener('click', () => {
    btnOpenElement.disabled = true;
    btnCloseElement.disabled = false;

    const coverElement = document.querySelector('.cover');
    coverElement.classList.add('open-cover');

    setTimeout(() => {
        coverElement.style.zIndex = -1;

        const paperElement = document.querySelector('.paper');
        paperElement.classList.remove('close-paper');
        paperElement.classList.add('open-paper');

        // Animasi hati
        const heartElement = document.querySelector('.heart');
        heartElement.style.display = 'block';

        // Mulai musik saat surat dibuka
        bgMusic.play();
    }, 500);
});

// Event tombol tutup surat
btnCloseElement.addEventListener('click', () => {
    btnOpenElement.disabled = false;
    btnCloseElement.disabled = true;

    const coverElement = document.querySelector('.cover');
    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('open-paper');
    paperElement.classList.add('close-paper');

    setTimeout(() => {
        coverElement.style.zIndex = 0;
        coverElement.classList.remove('open-cover');

        // Sembunyikan hati
        const heartElement = document.querySelector('.heart');
        heartElement.style.display = 'none';

        // Hentikan musik saat surat ditutup
        bgMusic.pause();
    }, 500);
});

// Tombol kontrol musik
btnMusicElement.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        btnMusicElement.textContent = "🔊";
    } else {
        bgMusic.pause();
        btnMusicElement.textContent = "🔇";
    }
});

// Fungsi untuk membuat efek bintang jatuh
function createFallingStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    // Posisi bintang acak
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `-${Math.random() * 20}vh`;

    // Memperlambat kecepatan jatuh
    const duration = Math.random() * 5 + 5; // 5-10 detik lebih lambat
    star.style.animationDuration = `${duration}s, 2s`; // Twinkling lebih cepat


    document.body.appendChild(star);

    // Hapus elemen setelah selesai animasi
    setTimeout(() => {
        star.remove();
    }, duration * 1200);
}

// Buat bintang secara berkala
setInterval(createFallingStar, 150);


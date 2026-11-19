# Zombie Invasion — paket pemasangan

Isi: game (`index.html`), `manifest.json`, `sw.js` (offline), ikon, dan dua skrip untuk menjalankan di komputer.

## A. Pasang di HP / PC (disarankan): taruh di hosting HTTPS gratis
Aplikasi web hanya bisa dipasang dari alamat HTTPS (atau localhost).
1. Unggah seluruh isi folder ini ke salah satu: Netlify Drop (app.netlify.com/drop, tinggal seret folder), GitHub Pages, atau Cloudflare Pages.
2. Buka alamatnya di Chrome HP, lalu pilih menu ⋮ → **Instal aplikasi / Tambahkan ke layar utama**.
   Atau pakai tombol **⬇ Pasang aplikasi** di lobby (muncul kalau browser mendukung).
3. iPhone: Safari → Bagikan → Tambah ke Layar Utama.
Setelah terpasang: layar penuh, otomatis landscape, ikon sendiri, dan jalan offline setelah dibuka sekali dengan internet.

## B. Jalankan di komputer tanpa hosting
- Windows: klik dua kali `Mainkan-Windows.bat` (butuh Python). Di Chrome/Edge klik ikon ⊕ di address bar untuk memasangnya sebagai aplikasi.
- Mac/Linux: jalankan `Mainkan-Mac-Linux.sh`.
Jangan buka `index.html` langsung (file://): fitur pasang dan offline tidak aktif.

## C. Jadi file .apk / .exe
Setelah game ada di hosting (langkah A), buka **pwabuilder.com**, masukkan alamatnya, lalu unduh paket Android (.apk/.aab) atau Windows (.msix).

Catatan: Three.js dimuat dari cdnjs saat pertama dibuka, lalu disimpan di cache untuk offline.

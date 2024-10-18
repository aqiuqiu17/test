// Fungsi untuk menampilkan bagian (section) yang dipilih dan menyembunyikan yang lain
function showSection(section) {
    // Sembunyikan semua bagian
    document.getElementById('home').classList.add('hidden');
    document.getElementById('about').classList.add('hidden');
    document.getElementById('services').classList.add('hidden');
    document.getElementById('contact').classList.add('hidden');

    // Tampilkan bagian yang dipilih
    document.getElementById(section).classList.remove('hidden');
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login form submitted.');
    // Add your login handling code here
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Register form submitted.');
    // Add your registration handling code here
});
document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('downloadPoster');
    const imageUrl = 'assets/image/poster.jpg'; // Sesuaikan dengan path relatif ke gambar yang benar

    downloadButton.addEventListener('click', function() {
        // Buat elemen <a> untuk mengunduh gambar
        const downloadLink = document.createElement('a');
        downloadLink.href = imageUrl;
        downloadLink.download = 'asstes/image/poster.jpg'; // Nama file yang akan diunduh

        // Simulasikan klik pada link untuk memicu unduhan
        downloadLink.click();
    });
});


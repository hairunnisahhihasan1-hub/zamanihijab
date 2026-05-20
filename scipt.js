function beliWA(namaProduk, idSelectWarna) {
    // Nomor WhatsApp Toko Zamani Scarf
    var nomorWA = "6281244835127"; 
    
    // Mengambil data elemen pilihan warna
    var elemenWarna = document.getElementById(idSelectWarna);
    var warnaTerpilih = elemenWarna.options[elemenWarna.selectedIndex].text;
    
    // Format teks template chat
    var teksChat = "Halo Zamani Scarf, saya mau order produk ini:\n\n" +
                   "• Produk: " + namaProduk + "\n" +
                   "• Pilihan Warna: " + warnaTerpilih + "\n\n" +
                   "Apakah stoknya masih tersedia?";
    
    // Membuat link resmi WhatsApp API dan membukanya di tab baru
    var urlWA = "081244835127" + nomorWA+ "?text=" + encodeURIComponent(teksChat);
    window.open(urlWA, '_blank');
}
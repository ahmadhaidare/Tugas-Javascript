let barang = [
    { nama: "Beras", harga: 10000, jumlah: 5},
    { nama: "Gula", harga: 14000, jumlah: 5},
    { nama: "Telur", harga: 20000, jumlah: 2},
    { nama: "Minyak Goreng", harga: 9000, jumlah: 10},
  ];
  
  function hitung() {
    const beras = barang[0].harga * barang[0].jumlah;
    const gula = barang[1].harga * barang[1].jumlah;
    const telur = barang[2].harga * barang[2].jumlah;
    const minyak = barang[3].harga * barang[3].jumlah;
  
    return beras + gula + telur + minyak;
  }
  
console.log("Harga total barang adalah Rp" + hitung().toLocaleString());
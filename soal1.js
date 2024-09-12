let panjang = 20.5
let lebar = 30
let harga_meter = 1500000
let ppn = 0.15

let luasTanah = panjang * lebar
let hargaTanah = luasTanah * harga_meter
let hargaTotal = hargaTanah + (hargaTanah * ppn)

console.log("Luas tanah : " + luasTanah + " m2");
console.log("Harga tanah sebelum PPN : Rp " + hargaTanah.toLocaleString());
console.log("Harga total setelah PPN : Rp " + hargaTotal.toLocaleString());
class Lingkaran {
    constructor(r) {
      this.r = r;
    }
  
    luas() {
      return Math.PI * this.r * this.r;
    }
  
    keliling() {
      return 2 * Math.PI * this.r;
    }
}
  
class Tabung extends Lingkaran {
    constructor(r, t) {
      super(r);
      this.t = t;
    }
  
    volume() {
      return this.luas() * this.t;
    }
  
    luasPermukaan() {
      return 2 * this.luas() + this.keliling() * this.t;
    }
  
    luasSelimut() {
      return this.keliling() * this.t;
    }
}
  
class Kerucut extends Lingkaran {
    constructor(r, t) {
      super(r);
      this.t = t;
    }
  
    volume() {
      return (1 / 3) * this.luas() * this.t;
    }
  
    luasPermukaan() {
      let s = Math.sqrt(
        this.r * this.r + this.t * this.t
      );
      return this.luas() + Math.PI * this.r * s;
    }
  
    luasSelimut() {
      let s = Math.sqrt(
        this.r * this.r + this.t * this.t
      );
      return Math.PI * this.r * s;
    }
}
  
class Bola extends Lingkaran {
    constructor(r) {
      super(r);
    }
  
    volume() {
      return (4 / 3) * Math.PI * Math.pow(this.r, 3);
    }
  
    luasPermukaan() {
      return 4 * this.luas();
    }
}
  
let bola = new Bola(30 / 2); 
let kerucut = new Kerucut(20 / 2, 40);
let tabung = new Tabung(15 / 2, 50);
  
console.log("Bola:");
console.log("Volume:", bola.volume(), "cm³");
console.log("Luas Permukaan:", bola.luasPermukaan(), "cm²");
  
console.log("Kerucut:");
console.log("Volume:", kerucut.volume(), "cm³");
console.log("Luas Permukaan:", kerucut.luasPermukaan(), "cm²");
console.log("Luas Selimut:", kerucut.luasSelimut(), "cm²");
  
console.log("Tabung:");
console.log("Volume:", tabung.volume(), "cm³");
console.log("Luas Permukaan:", tabung.luasPermukaan(), "cm²");
console.log("Luas Selimut:", tabung.luasSelimut(), "cm²");
//! PROTOTIPE INHERITANCE

//? menggunakan object constructor
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

//? membuat method dengan memanfaatkan prototipe
// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, Selamat makan`;
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, Selamat bermain`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Halo ${this.nama}, Selamat tidur`;
// };

// let klaz = new Mahasiswa("Ikhlas", 20);

//! VERSI CLASS

class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, Selamat makan`;
  }

  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, Selamat bermain`;
  }

  tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, Selamat tidur`;
  }
}

let klaz = new Mahasiswa("Ikhlas", 20);
let gara = new Mahasiswa("Tegar", 20);

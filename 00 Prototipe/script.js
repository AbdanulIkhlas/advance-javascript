//! Cara untuk membuat object pada javascript

//! 1. Object Literal

// let mahasiswa1 = {
//   nama: "Klaz",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi += porsi;
//     //? string literal
//     console.log(`Halo ${this.nama}, selamat makan`);
//   },
// };

// let mahasiswa2 = {
//   nama: "gara",
//   energi: 20,
//   makan: function (porsi) {
//     this.energi += porsi;
//     //? string literal
//     console.log(`Halo ${this.nama}, selamat makan`);
//   },
// };

/*
 * ---------------------------------
 * cara memanggilnya yaitu di consloe chrome
 * mahasiswa1 / mahasiswa2 ==> maka akan muncul
 * jika ingin menggunakan function makan maka memanggil mahasiswa1.makan(n)
 */

//! 2. Function Declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};

//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan`);
//   };

//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log("Selamat Bermain");
//   };

//   return mahasiswa;
// }

/*
 * Cara menggunakan dengan instansiasi
 * cara memanggil dengan memanggil object nya
 */

// let klaz = Mahasiswa("Ikhlas", 20);
// let gara = Mahasiswa("Garaa", 10);

//! 3. Constructor function
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log("Selamat Bermain");
  };
}

//* cara memanggil ==> Klaz

let Klaz = new Mahasiswa("Klaz", 20);

//! 4. object.create

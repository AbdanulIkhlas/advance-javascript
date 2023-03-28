/*
  ! alasan mengggunakan closure
 * 1. untuk membuat function factories
 * 2. untuk membuat seolah punya private method
 */

//! Contoh closure 1
// function init() {
//   let nama = "klaz";
//   function tampilNama() {
//     //? ini adalah closure karena memakai leksikal scopenya
//     //? karena membutuhkan data dari luar function
//     console.log(nama);
//   }
//   tampilNama();
// }
// init();

//! Contoh closure 2
// function init() {
//   return function (nama) {
//     console.log(nama);
//   };
// }
// let panggilNama = init();
// panggilNama("Muhammadd Abdanul Ikhlas");

//! contoh closure 3, function factories
//? function sesuai dengan function yangg lain
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// }

// let selamatPagi = ucapkanSalam("pagi");
// let selamatSiang = ucapkanSalam("siang");
// let selamatMalam = ucapkanSalam("malam");

// selamatPagi("Ikhlas"); //? output : Halo Ikhlas, Selamat pagi, semoga harimu menyenangkan!
// selamatMalam("Klaz");  //? output : Halo Klaz, Selamat malam, semoga harimu menyenangkan!

//! contoh closure 4
//? function ekspression
//? menggunakan closure agar perubahhan yang terjadi di luar funtio ntidak mmpengaruhi isi function
//? jadi kyk private
// let add = function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// };

// let a = add();

// counter = 100;
// console.log(a());
// console.log(a());
// console.log(a());

//? agar saat di log langsung jalan saat di assignt ke variabel dapat menggunakan immediateli invok function
let add = (function () {
  let counter = 5;
  return function () {
    return `ini dari dalam function, nilai : ${++counter}`;
  };
})(); //? lansung menjalankan function

counter = 100;
console.log(add());
console.log(add());
console.log(add());

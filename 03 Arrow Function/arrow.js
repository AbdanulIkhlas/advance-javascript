//! -------- BELAJAR ARROW FUNCTION -------
//? merupakan bentuk lain dari membuat function yang lebih ringkas

//! function ekspression
// const tampilNama = function (nama) {
//   return `Halo ${nama}, dan ini dari function ekspression`;
// };
// console.log(tampilNama("Klaz"));

//! ---- arrow function ----
// const tampilkanNama = (nama) => {
//   return `Halo ${nama}, dan ini dari arrow function`;
// };
// console.log(tampilkanNama("ikhlas"));

// const sapa = (nama, waktu) => {
//   return `Selamat ${waktu} ${nama}`;
// };
// console.log(sapa("gara", "malam"));

//! jika cmn 1 param dan cm return
//? dapat menggunakan implisit return
// const tampilkanNama1 = (nama) => `Halo ${nama}, dan ini dari arrow function`;

// console.log(tampilkanNama1("ikhlas"));

//! tanpa parameter
// const tampilNama2 = () => `Hello World`;
// console.log(tampilNama2());

//! contoh lain arrow function
//? membuat array baru yg isinya jumlah huruf
let mahasiswa = ["Klazz", "gara", "agil"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// console.log(jumlahHuruf);
// });

//? membuat kembali dengan menggunakan arrow function
let jumlahHuruf = mahasiswa.map((nama) => nama.length);
console.log(jumlahHuruf);

//? membuat kembali array dengan menggunakan arrow function yang mengembalikan object
let jumlahHuruf2 = mahasiswa.map((nama) => ({
  nama, //? sama dengan < nama : nama, >
  jmlHuruf: nama.length,
}));
console.table(jumlahHuruf2);
console.log(jumlahHuruf2);

//! -------------- KONTEKS THIS DI ARROW FUNCTION ---------------

//! Constructor function
// const Mahasiswa = function () {
//   this.nama = "Klaz";
//   this.umur = 20;
// console.log(this); //? mengacu ke mahasiswa
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya berumur ${this.umur}`);
//   };
// };

// const ikhlas = new Mahasiswa();

//! mengubah ke arrow function
// * tidak saemua function langsung dapat di ubah menjadi arrow function
// * tetapi method bisa seperti ex.1
// const Mahasiswa = function () {
//     this.nama = "Klaz";
//     this.umur = 20;
// console.log(this); //? mengacu ke mahasiswa
//     this.sayHello = () => { //? ex.1 : method yg langsung di ubah ke arrow function
//       console.log(`Halo, nama saya ${this.nama}, dan saya berumur ${this.umur}`);
//     };
// //? setiap 1/2 detik umur bertambah 1
// setInterval(() => {
// console.log(mhs1.umur++);
// }, 500);
//   };

//   const ikhlas = new Mahasiswa();

//! mengubah ke arrow function menggunakan object literal
// * arrow function tidak memakai konsep this
// const mhs1 = {
//   nama: "klaz",
//   umur: 20,
//   sayHello: () => {
//     //? bakal undefined karena tidak ada this dan tidak menggunakan konsep this
//     //? dia bakal mencari sampai ke window
//     console.log(`Halo, nama saya ${this.nama}, dan saya berumur ${this.umur}`);
//   },
// };

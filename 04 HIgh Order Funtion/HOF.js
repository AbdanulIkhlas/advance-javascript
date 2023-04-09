//! ===================== HIGH ORDER FUNCTION (HOF) ===========================
//? merupakakan function yang memiliki parameter function
//? function yang menjadi parameter di sebut callback

const angka = [-1, 2, 5, -2, 4, 8, -3, 10, 9, -6];

//! ===================== mencari angka >= 3 =================================
//* ----------------------- menggunakan for -----------------------------------
let hasilFor = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    hasilFor.push(angka[i]); //? memasukkan angka >= 3 ke arr hasil
  }
}

console.log(`hasilFor : ${hasilFor}`);
//*----------------------------------------------------------------------------

//* ----------------------- menggunakan filter --------------------------------
// const hasilFilter = angka.filter(function (a) {
//   return a >= 3; //? angka yang >= 3 langsung masuk ke array hasilFilter[]
// });

//* atau bisa begini menggunakan arrow function
const hasilFilter = angka.filter((a) => a >= 3); //? angka yang >= 3 langsung masuk ke array hasilFilter[]
console.log(`hasilFilter : ${hasilFilter}`);

//*----------------------------------------------------------------------------

//* ---------------------------- MAP ------------------------------------------
//? memetakan hasil kali 2 semua elemen  dalam angka[] dan disimpan dalam hasilMap[]
const hasilMap = angka.map((a) => a * 2);
console.log(`hasilMap : ${hasilMap}`);
//*----------------------------------------------------------------------------

//* ---------------------------- REDUCE ---------------------------------------
//? menjumlah seluruh elemen dalam array angka[]
//? accumulator : hasil dari prosesnya
//? currentValue : value yang sedang di looping/eksekusi/dijumlahkan
const hasilReduce = angka.reduce(
  //? (-1) + 2 + 5 + (-2) + 4 + 8 + (-3) + 10 + 8 + (-6)
  (accumulator, currentValue) => accumulator + currentValue,
  0 //? 0 adalah nilai awal (dpt tidak di tulis klw 0)
);
console.log(`hasilReduce : ${hasilReduce}`);
//*----------------------------------------------------------------------------

//* ---------------------------- METHOD CHAINING ------------------------------
//? cari angka > 5, hasilnya kalikan 3, dan jumlahkan
//? angka.filter().map().reduce();
const hasilChaining = angka
  .filter((a) => a > 5) //? 8,10,9
  .map((a) => a * 3) //? 24,30,27
  .reduce((acc, cur) => acc + cur); //? hasil : 81

console.log(`hasilChaining : ${hasilChaining}`);
//*----------------------------------------------------------------------------

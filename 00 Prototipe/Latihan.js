//! Latihan Menghitung Luas Segitiga Dan Lingkaran

//? Menggunakan constructor

function Segitiga(mencariApa) {
  this.mencariApa = mencariApa;
}

Segitiga.prototype.Luas = function (alas, tinggi) {
  let Luas = (alas * tinggi) / 2;
  return `Luas Segitiga = ${Luas}`;
};

class Lingkaran {
  constructor(r) {
    this.jari = r;
  }

  Luas(r) {
    let Luas = 3.14 * r * r;
    return `Luas Lingkaran = ${Luas}`;
  }
}

let segitiga = new Segitiga("Luas");
let lingkaran = new Lingkaran(10);

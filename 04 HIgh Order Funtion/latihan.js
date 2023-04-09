//! LATIHAN HOF
//! Mengambil semua elemen video
//? mengambil semua elemen yang class data-duration
const videos = Array.from(document.querySelectorAll("[data-duration]")); //? mengubah ke array, yg awal nya node

//! memilih yang javascript lanjutan
let jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  //! ambil durasi masing2 video
  .map((item) => item.dataset.duration) //? nyambung dari atas

  //! konversi durasi menjadi float, ubah menit menjadi detik
  .map((waktu) => {
    //? nyambung dari atas
    //? melakukan split 10:30 -> [10,30] dengan tanda batas : dan konversi ke float
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  //! jumlahkan semua detik nya
  .reduce((total, detik) => total + detik); //? nyambung dari atas

//! ubah format menjadi jam, menit, detik
const jam = Math.floor(jsLanjut / 3600); //? di bulatkan ke bawah
jsLanjut -= jam * 3600;

const menit = Math.floor(jsLanjut / 60); //? di bulatkan ke bawah
const detik = jsLanjut - menit * 60;

//! simpan durasi di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

//! menghitung jumlah video
const jumlahVideo = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;

//! simpan jumlah video di DOM
const pJumlahVideo = document.querySelector(".jumlah-video");
pJumlahVideo.textContent = `${jumlahVideo} video.`;

//! ngetes log
// console.log(jsLanjut);
// console.log(jam);
// console.log(menit);
// console.log(detik);

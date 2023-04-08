//! implementasi arrow function
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  //? mengecek sudah ada class tersebut atau belum dalam div.box
  if (this.classList.contains(satu)) {
    //? jika sudah ada, menukar isinya
    [satu, dua] = [dua, satu];
  }

  //? jika di klik box tambahkan classs size, jika di klik lagi hapus
  this.classList.toggle(satu);

  //? menunggu beberapa detik trus jalankan function di bawah
  //? menggunakan arrow function agar this nay di dalam cakupan box
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});

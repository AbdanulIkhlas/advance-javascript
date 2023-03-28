//!
function init() {
  let nama = "klaz";
  function tampilNama() {
    //? ini adalah closure karena memakai leksikal scopenya
    //? karena membutuhkan data dari luar function
    console.log(nama);
  }
  tampilNama();
}
init();

//!  TEMPLATE LITERAL
//? contoh penggunaan lain template literal, membuat HTML Fragment
const mhs = {
  nama: "Muhammad Abdanul Ikhlas",
  NIM: "123210009",
  umur: 20,
  email: "muhabdanulikhlas0983@gmail.com",
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nim">${mhs.NIM}</span>
</div>`;

console.log(el);

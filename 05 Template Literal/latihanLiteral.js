//! LATIHAN TEMPLATE LITERAL
//! html fragment
// const mhs = {
//   nama: "Muhammad Abdanul Ikhlas",
//   NIM: "123210009",
//   umur: 20,
//   email: "muhabdanulikhlas0983@gmail.com",
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">NIM   : ${mhs.NIM}</span><br>
//     <span class="nim">Umur  :${mhs.NIM}</span><br>
//     <span class="nim">Email :${mhs.NIM}</span><br>
// </div>`;

//! LOOPING
// const mhs = [
//   {
//     nama: "Muhammad Abdanul Ikhlas",
//     email: "muhabdanulikhlas0983@gmail.com",
//   },
//   {
//     nama: "Tegar Wibisana",
//     email: "muhabdanulikhlas0983@gmail.com",
//   },
//   {
//     nama: "Raziet",
//     email: "muhabdanulikhlas0983@gmail.com",
//   },
// ];

//? melakukan looping
/*
 ? sebenarnya begini cuman kena prettier
const el = `
<div class="mhs">
    ${mhs.map((m) => 
        `<ul>
            <li>${m.nama}</li>
            <li>${m.email}</li>
        </ul>`
      ).join(" ")} //? join agar koma hilang
</div>`;
 */

// const elemen = `
// <div class="mhs">
//     ${mhs
//       .map(
//         (m) =>
//           `<ul>
//             <li>${m.nama}</li>
//             <li>${m.email}</li>
//         </ul>`
//       )
//       .join(" ")}
// </div>`;

//! CONDITIONAL Ternary

// const lagu = {
//   judul: "Kau adalah",
//   penyanyi: "Isyana",
//   feat: "Rayi",
// };

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat : ${lagu.feat})` : ""} </li>
//     </ul>
// </div>`;

//! HTML FRAGMENT BERSARANG

function cetakMataKuliah(mataKuliah) {
  return `
        <ol>
            ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
        </ol>
    `;
}

function cetakHobi(hobi) {
  return `
        <ol>
            ${hobi.map((hb) => `<li>${hb}</li>`).join("")}
        </ol>
    `;
}

const mhs = {
  nama: "Muhammad Abdanul Ikhlas",
  NIM: "123210009",
  semester: 4,
  mataKuliah: ["Analisa Algoritma", "PBO", "OPK", "AOK"],
  hobi: ["Tenis Meja", "Volly", "Game", "Ngoding"],
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
    <h4>Hobi :</h4>
    ${cetakHobi(mhs.hobi)}
</div>`;

document.body.innerHTML = el;

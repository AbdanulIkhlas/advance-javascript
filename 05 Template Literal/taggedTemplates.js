//! Tangged Templates
const nama = "klaz";
const umur = 20;

function cobaTagged(strings, ...values) {
  //? penggunaan ... agar langsng otomatis menggabungkan ekspression ke dalam array
  //? strings akan menyimpan string yang ada pada str ke dalam array
  //? : strings = ["Halo nama saya "," , saya berumur ", " tahun"]
  //? values menyimpan ekspression yang ada di str dalam sebuah array
  //? : values = ["klaz",20]
  //----------------------------------
  //! menggabungkan strings dan values menggunakan forEach
  //   let result = "";
  //   strings.forEach((str, i) => {
  //     result += `${str}${values[i] || ""}`; //? maksud or pada values adalah jika values tidak ada isinya maka tampilkan '' (untuk menghapus undefined)
  //   });
  //   return result;
  //----------------------------------
  //! menggabungkan strings dan values menggunakan reduce
  return strings.reduce((result, str, i) => {
    `${result}${str}${values[i] || ""}`;
  }, "");
}

//? penggunaan tagged templates
const str = cobaTagged`Halo nama saya ${nama} , saya berumur ${umur} tahun`;

console.log(str);

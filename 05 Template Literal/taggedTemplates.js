//! Tangged Templates
const nama = "klaz";
const umur = 20;

function cobaTagged(strings, ...values) {
  //? penggunaan ... agar langsng otomatis menggabungkan ekspression ke dalam array
  //? strings akan menyimpan string yang ada pada str ke dalam array
  //? : strings = ["Halo nama saya "," , saya berumur ", " tahun"]
  //? values menyimpan ekspression yang ada di str dalam sebuah array
  //? : values = ["klaz",20]

  return values;
}

//? penggunaan tagged templates
const str = cobaTagged`Halo nama saya ${nama} , saya berumur ${umur} tahun`;

console.log(str);

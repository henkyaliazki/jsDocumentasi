/*
 ?Tipe data pada javaScript ada 3

 *Number(int) berupa angka bulat atau decimal
    !->BigInt biasanya digunakan untuk data yang besar dan hitung pasti
 *String berupa kalimat ataupun kata, Kata dibungkus dalam tand('kata'/"kata")
    !->String Template digunakan untuk menggabungkan kalimat dengan tanda(`...`)
    !->String Concatation untuk menggabungkan kalimat dengan operator (+)
 *Boolean berupa true and false

*/

//EXAMPLE USE

//* Number
let age = 12;

//*String
let name = 'ali';

//!String Template
console.log(`Hallo nama saya ${name} dan umur saya ${age}`)

//!String Concatation
let ageName = age + ' ' + name;
console.log(ageName)
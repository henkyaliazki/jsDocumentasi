/*
?Di dalam javaScript ada beberapa variabel seperti
*var
    !var digunakan untuk menginisialisasi awal sebuah 
    !penamaan variabel dan bis di ganti untuk valuenya
*let
    !let sama dengan var bedanya didalam ECMA6 ini lebih sering digunakan
*const
    !const itu nilainya tidak bisa diubah kecuali ia berbentuk sebuah array 
*null
    !null itu nilai kosong kadang kita perlu menginisialisasikan variabel 
    !tanpa value terlebih dahulu maka pakai ini
*/

//!EXAMPLE USE

//var
var name = 'ali';
name = 'lia';
console.log(name)   //lia


//let
let firstname = 'henky';
firstname = 'aliazki'
console.log(firstname);  //aliazki


//const
const age = 22;
// age = 23;
console.log(age)   //TypeError: Assignment to constant variable.


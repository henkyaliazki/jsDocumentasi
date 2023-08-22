/*
 *Digunakan untuk mengambil keputusan  dengan menggunakan 
 *operator yang kita pelajari sebelumnya
 */

//! ifelse
const nilai = 50; //nilai yang akan dibandingkan
const ucapan = "Selamat anda lulus"; //variable yang akan jadi string template
let result; //variabel sementara 
//! menggunakan operator and dan keduanya harus true
if (nilai >= 90 && nilai <= 100) {
    //! jika nilailebih dari sama dengan 90 dan kurang dari sama dengan 100
    console.log(result = `${ucapan} dengan nilai memuaskan`);
} else if (nilai >= 80 && nilai <= 89) {
    //! jika nilai lebih dari sama dengan 80 dan kurang dari sama dengan 89
    console.log(result = `${ucapan} dengan nilai baik`);
} else if (nilai >= 70 && nilai <= 79) {
    //! jika nilai lebih dari sama dengan 70 dan kurang dari 79
    console.log(result = `${ucapan} dengan nilai cukup`);
} else {
    //! ketika nilai tidak ada pada statement maka outputnya ini
    console.log('Silahkan coba lagi tahun depan');
}

/*
! ternary operator 
    *sama seperti ifelse namun ia shortcut dari ECMA6 untuk mengambil keputusan jika 
    *kodisinya cuma ada true dan false
*/
// sintax => variabel = kondisinya apa ? jika true pilih ini : jika false maka ini;
const umberela = true;
const rain = umberela ? "bawa payung" : "tidak usah bawa payung";
console.log(rain)

const sumValue = 80;
const valueA = 70;
const lolos = valueA >= sumValue ? "anda lolos" : "anda tidak lolos";
console.log(lolos)
/**
 * jadi ketika si valueA kurang dari sumValue maka dia tidak lolos 
 * dan jika valueA lebih besar dari sumValue maka ia lolos
 */
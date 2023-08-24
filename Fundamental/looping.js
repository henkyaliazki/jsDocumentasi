/*
 * Looping adalah perulangan dan biasanya digunakan untuk menghitung jumlah keseluruhan
 * panjang dari sebuah data
 */

/*
 ! For
   *for(variabel awal; kondisi ;statement){
    ?do something  }
*/

//kita akan mencetak kata hallo sebanyak 5x
const greathing = "hallo"
for (let i = 0; i <= 5; i++) {  //jika i kurang dari sama dengan 5 maka akan mengeksekusi greathing + 1 sampai ia bernilai 5
    console.log(greathing)
}

console.log('===============================================')
/*
 !For of => digunakan untuk me looping sebuah array
*/
const arr = ["jambu", 1, true, "apel"]
for (const arrTemp of arr) {
    console.log(arrTemp)
}

console.log('===============================================')


/*
 ! while => digunakan untuk melooping jika tidak tau sampai berapa,
 ! jika di for kan kita sudah tau sampai <=5 contohnya jika while tidak
*/
let angka = 10;
while (angka <= 15) {
    console.log(angka)
    angka += 2;
}
/* 
 * Hampir sama dengan object namun untuk array dia tidak memiliki key dan value
 * namun dengan index, index dimulai dari 0 dan menggunakan symbol []
*/

// contoh array
const user = ['ali', 'azki', true, 25];
//index pertama[0] adalah ali dan index[3] adalah 25 

//cara melihat panjang dari sebuah array
console.log(user.length)

//? Manipulasi array

// add element array 
user.push('henky')
console.log('====push====')
console.log(user);

//pickup last element 
user.pop()
console.log('====pop====')
console.log(user);

//pickup first element
user.shift()
console.log('====shift====')
console.log(user);

//add first element
user.unshift('ali')
console.log('====unshift====')
console.log(user);

/* 
    *splice digunakan untuk menghapus data tetapi ia bisa mengambil data dari index manapun 
    * slice(2,1) artinya pengambilan dimulai dari index 2 dan 1 elemen setelah index 2
    * argument 1 untuk mulai hapus dari mana, argument ke 2 berapa index kebelakang yang di hapus
    * argument ke tiga untuk penambahan isi dari array 
*/
// user.splice(2, 1)
// console.log('====splice====')
// console.log(user);

/* 
    *Namun dalan splice juga terdapat argument ke 3 untuk menambahkan element baru 
    * splice(1,0,'henky') artinya didalam index 1 akan di tambahkan elemen string 'henky'
*/

user.splice(1, 0, 'henky')
console.log('====splice 3 argument====')
console.log(user);

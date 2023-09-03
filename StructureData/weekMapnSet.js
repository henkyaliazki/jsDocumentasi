/* 
 *Mengacu pada tempat penyimpanan pada memori,sering kali kita menghapus
 *element tapi masih ada nilai yang tertinggal pada memori(item sampah/garbage collection)
*/
const { inspect } = require('util') //untuk melihat data yang ada pada weakMap
//syntax 
const namaVariabel = new WeakMap();

//kaidah  weekMap & weekSet
//memerlukan delay untuk garbage colection bekerja

const visitCountMap = new WeakMap() //menyimpan data user

const countUser = (user) => {
    let count = visitCountMap.get(user) || 0;
    visitCountMap.set(user, count + 1)
    user = null;
}
let jonas = { name: 'jonas' }
countUser(jonas) //menambahkan user jonas
//delay garbage colaction bekerja dan inspect + showHidden: true agar data sampah itu muncul pada console.log
setTimeout(() => {
    console.log(inspect(visitCountMap, { showHidden: true }))
}, 1000)

//weakSet

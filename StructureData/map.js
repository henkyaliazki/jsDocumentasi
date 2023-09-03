/* 
 * Map () itu sama dengan object namun yang berbeda pada key untuk map tipe datanya bebas
 * Output yang di hasilkan ialah object
*/

//Cara penggunaan
const myMap = new Map();
// Map()bisa berisi apapun bisa object bisa juga array multidimensi

//contoh map
const students = new Map([
    ['ali', 'jakbar'],
    ['azki', 'jakut'],
    ['budi', 'jaksel']
])

//hasil dari map()
console.log(students) //Map(3) { 'ali' => 'jakbar', 'azki' => 'jakut', 'budi' => 'jaksel' } (ali=key,jakbar=value, etc)

//mathod yang ada di map
console.log(students.get('ali')) //jakbar
//mathod ini guna untuk mengambil value berdasarkan key
console.log(students.set('agus', 'jakpus')) //penambahan key agus => jakpus
//mathode set guna untuk menambah key dan value baru pada object map
// students.clear()
//mathod guna menghapus semua element
const deleteStudents = students.delete('ali')
// console.log(deleteStudents)
//mathod guna menghapus berdasarkan key
const hasStudents = students.has('azki')
// console.log(hasStudents)
//guna untuk mencari data berdasarkan key dan akan return true jika ada false jika tidak ada

//!soal
/*
 Buatlah sebuah fungsi yang menerima sebuah array angka dan mengembalikan array 
 baru yang berisi setiap angka dari array input ditambah 5.
*/
const addFiveEachNumber = (arr) => {
    const result = arr.map(number => number + 5)
    return result
}

const resultAdd = addFiveEachNumber([2, 3, 5])
console.log(resultAdd)

/* 
    Buatlah sebuah fungsi yang menerima array dari objek berisi data nama 
    lengkap dan mengembalikan array baru yang berisi inisial dari setiap nama.
*/
const initialValue = (inArr) => {
    //kita ubah element arr jadi object
    const getName = inArr.map(objName => {
        //kita ambil value dan jadikan dua string
        const getValue = getName.fullName.split(' ');
        //ambil setiap index 0 dari dua string dan gabungkan
        const resultConvert = getValue.map(getValues => getValues[0]).join('')
        return resultConvert;
    })
    return getName;
}
const input = [
    { fullName: 'John Doe' },
    { fullName: 'Jane Smith' },
    { fullName: 'Michael Johnson' }
];
const output = initialValue(input)
console.log(output)

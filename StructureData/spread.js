/*
 *Spread operator itu untuk buat penyebaran dari array/object yang sudah ada (duplikasi)
 *Spread juga bisa untuk penggabungan object/array tanpa terbukus oleh indentitas (object literal jika object)
*/

//Pengabungan array
const fruits = ['apel', 'anggur']
const foods = ['ayam', 'bakso']
const fruitAndFoods = [...fruits, ...foods]
// console.log(fruitAndFoods) //['apel','anggur','ayam','bakso']
// console.log(...fruits) // apel,anggur

//penggabungan object/object literal

const obj1 = { name: 'ali', age: 23 }
const obj2 = { address: 'jkt', gender: 'men' }
const allObj = { ...obj1, ...obj2 }
console.log('=======obj======')
// console.log(allObj) //{ name: 'ali', age: 23, address: 'jkt', gender: 'men' }
// console.log(obj1) //{ name: 'ali', age: 23,}

/*latihan
Soal: Menggabungkan Data dari Beberapa Sumber

Anda memiliki beberapa data dalam bentuk objek dan array yang ingin Anda gabungkan menjadi satu array besar dengan menggunakan spread operator.
*/
const product1 =
{
    nama: 'Laptop',
    harga: 8000000
}
const product2 = [
    {
        nama: 'Smartphone', harga: 4000000
    },
    {
        nama: 'Tablet', harga: 3000000
    }
]
const product3 = ['Mouse', 'Keyboard']
/* 
    Output: [  { nama: 'Laptop', harga: 8000000 },  { nama: 'Smartphone', harga: 4000000 },  { nama: 'Tablet', harga: 3000000 },  'Mouse',  'Keyboard']

*/

//buat function marge data di atas 
function margeData(...data) {
    const resultMarge = []
    for (const item of data) {
        if (Array.isArray(item)) {
            resultMarge.push(...item)
        } else if (typeof item === 'object') {
            resultMarge.push(item)
        } else {
            resultMarge.push(item)
        }
    }
    return resultMarge
}
const resultMarge = margeData(product1, product2, product3);
// console.log(resultMarge)

const user =
{
    name: "Alice",
    age: 30
}
const userArr = [
    {
        name: 'Rony',
        age: 20
    },
    {
        name: 'Charlie',
        age: 30
    }
]

function combinned(...datas) {
    const combinnedResult = datas.reduce((acc, items) => {
        if (Array.isArray(items)) {
            return [...acc, ...items]
        } else if (typeof items === 'object') {
            return [...acc, items]
        } else {
            return [...acc, items]
        }
    }, [])
    return combinnedResult;
}

const combinnedResult = combinned(user, userArr);
console.log(combinnedResult)
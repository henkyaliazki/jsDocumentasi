/*
 * Object adalah sekumpulan berbagai jenis tipe data 
 * yang mempunya key dan value/properthy
 */

const user =
{
    name: "ali",
    age: 24,
    "no address": "penerangan 50B",
    isMaried: false
}
console.log("Before")
console.log(user)

/*
 * Kita bisa mengganti value dan menambahkan isi dari data user
*/
user.name = "azki";
user["no address"] = "jelambar IX";
user.hobi = "main bola";
console.log("After");
console.log(user);

//loop dengan object
for (const objTemp in user) {
    let output = "";
    let output2 = "";
    output += user[objTemp] // kita ambil valuenya
    output2 += objTemp   //kita ambil key dari user
    console.log(output)
    console.log(output2)
}

// jika kita ingin mengambil semua key dan value dari user maka seperti ini
const data =
{
    name: "Henky",
    age: 24,
    isWork: "Barista"
}
for (const prop in data) {
    const key = prop
    const value = data[prop]
    console.log(`Key : ${key}, Value : ${value}`)
}
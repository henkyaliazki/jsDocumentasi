/* 
 *Sama dengan destructuring object namun ada perbedaan pada assigment value 
 * jika di object menggunakan({}) agar interpreter tidak menggangap itu block code
 * maka di array tidak usah
*/

const foods = ['baso', 'soto', 'mia-ayam']

//destructuring array
// let [fisrtFood, twoFood, thirthFood] = foods
// console.log(fisrtFood) //baso
// console.log(twoFood) //soto
// console.log(thirthFood) //mie-ayam

//mengambil pada index ke-2
// let [, , thirthFood] = foods
// console.log(thirthFood) //mie-ayam

/* 
    untuk penamaan sendiri bebas namun di sarankan agar merujuk pada index yang di ambil
*/

//assigment destructuring

let myFood = 'sate';
let herFood = 'kebab';

[myFood, herFood] = foods
console.log(myFood)
console.log(herFood)


//tukar nilai
let a = 1;
let b = 2;
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
[a, b] = [b, a]
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
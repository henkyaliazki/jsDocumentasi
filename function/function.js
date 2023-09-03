/* 
 *Function ialah sebuah proses yang menerima input dan berisi logika yang 
 * akan menghasilkan output
*/

//syntax before ECMA6 / function declaration
function nameFunction() {
    //logika
}

//after ECMA6/ arrow function /function expresion
const namaFunction = () => {
    //logika
}

//contoh penggunaan function
const perkalian = (a, b) => {
    return a * b; //mengembalikan nilai dari a x b
}
console.log(perkalian(2, 3)) // 6

//rest paramather => digunakan untuk menghitung jumlah sebuah array
const sum = (...data) => {
    let result = 0;
    for (const temp of data) {
        result += temp
    }
    return result;
}
const number = [2, 3, 4, 5, 6]
console.log(sum(...number)) //20

//closure(private mathod) => sebuah fungsi bersarang yang memiliki parent dan chill
//dimana property parent bisa digunakan di chill namun tidak sebaliknya

function say() { //parent funtion
    const name = 'ali';
    function greathing() { //chill function
        console.log(`Hallo ${name}`)
    }
    return greathing;
}
const myFunction = say()
myFunction()
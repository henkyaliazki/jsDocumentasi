//Digunakan untuk memanipulasi sekumpulan data terkait array

//contoh mengambil realtime indonesia
const myDate = new Date()

const timeInJkt = myDate.toLocaleString('id-ID', {
    timezone: 'Asia/Jakarta'
})
// console.log(timeInJkt)

//mencari nilai unique arr
const myArr = new Array('a', 'b', 2, 'c', true)
// console.log(myArr)

class UniqueArr extends Array {
    constructor(...args) {
        //make sure value before passing it to super
        const valueUnique = args.filter((item, index) => args.indexOf(item) === index)
        super(...valueUnique)
    }
    push(item) {
        //make sure only unique item to add
        if (!this.includes(item)) {
            super.push(item)
        }
    }
}

const newArr = new UniqueArr('a', 'b', 'c', 3, false)
// console.log(newArr)
// newArr.push('a')
// console.log(newArr)
// newArr.push('d')
// console.log(newArr)
/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */

// Tulis kode di bawah ini
class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}
class Rabbit extends Animal {
    eat() {
        return console.log(`${this.name} sedang makan!`)
    }
}
class Eagle extends Animal {
    fly() {
        return console.log(`${this.name} sedang terbang!`)
    }
}
const myRabbit = new Rabbit('labi', 2, true)
const myEagle = new Eagle('Elo', 4, false)
myRabbit.eat()
myEagle.fly()
console.log(myRabbit)
console.log(myEagle)

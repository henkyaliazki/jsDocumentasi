/* 
 *oop adalah sebuah entitas yang memiliki properthy dan mathod yang menerapkan sifat turunan yang dibawa oleh parentnya
*/
//contoh oop syntax
const car = {
    //properthy
    merk: 'Honda',
    color: 'Blue',
    maxSpeed: 200,

    //mathod
    drive: () => {
        console.log('wusshhhh')
    },
    reverse: () => {
        console.log('citt')
    }
}
//cara akses
//properthy
console.log(car.color) //blue
//mathod
car.drive() //wush

//class constructor oop
class Animal {
    constructor(name, color) {
        //properthies
        this.name = name;
        this.color = color
    }
    //mathod
    wolf() {
        console.log(`wolf ${this.name} berwarna ${this.color} is men`)
    }
}

const wolff = new Animal('suga', 'blue')
// console.log(wolff)

//call mathod
// wolff.wolf();

//!getter dan setter tanpa mathod internal
// class Motorcyle {
//     constructor(name, brand) {
//         this.name = name;
//         this.brand = brand;
//         this._chasisesNumber = `${this.brand}-${Math.floor(Math.random() * 100)}`
//     }
//     //getter
//     get chasisesNumber() {
//         return this._chasisesNumber
//     }
//     //setter
//     set chasisesNumber(chasisesNumber) {
//         console.log('Tidak bisa mengganti chasisNumber')
//     }
// }
// const motorcyle = new Motorcyle('Ayla', 'Honda')
// motorcyle.chasisesNumber = 'aaa'
// console.log(motorcyle)
// console.log(motorcyle.chasisesNumber)

//? dengan mathod internal => agar code dalam constructor lebih mudah di baca
class Motorcyle {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
        this._chasisesNumber = this._generateChasisse();
    }
    //getter
    get chasisesNumber() {
        return this._chasisesNumber
    }
    //setter
    set chasisesNumber(chasisesNumber) {
        console.log('Tidak bisa mengganti chasisNumber')
    }
    //mathod internal
    _generateChasisse() {
        const generate = `${this.brand}-${Math.floor(Math.random() * 100)}`
        return generate
    }
}
const motorcyle = new Motorcyle('Ayla', 'Honda')
motorcyle.chasisesNumber = 'aaa'
console.log(motorcyle)

//!Member Visibility => after ECMA22 js ada private class tersendiri
class Bus {
    //khususmember visibility harus mendeclarasikan enclosing class
    #rangkaNumber = null; //enclosing class
    constructor(name, type, vendor) {
        this.name = name;
        this.type = type;
        this.vendor = vendor;
        this.#rangkaNumber = this.#generateNumber();
    }
    get rangkaNumber() {

        return this.#rangkaNumber

    }
    set rangkaNumber(rangkaNumber) {
        console.log('Anda tidak bisa menggubah nomer rangka')
    }
    #generateNumber() {
        const rangkaNum = `${this.name}-${Math.floor(Math.random() * 100 + 1)}`
        return rangkaNum
    }
}
const bus = new Bus('Akap', 'Sleping bus', 'Sinar Jaya')
console.log(bus)
console.log(bus.rangkaNumber) //cara mengakses object private
// bus.#rangkaNumber = 123; //error
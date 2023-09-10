//dimana prosesnya menggunakan gaya deklaratif

//contoh mengisi newArr dengan arrOld
const arrOld = ['ali', 'irzan', 'hadi']

const pushToNewArr = []
for (let i = 0; i < arrOld.length; i++) {
    pushToNewArr.push(`${arrOld[i]} ?`)
}
// console.log(pushToNewArr) //cara imperatif

//cara deklaratif
const dectPush = arrOld.map((item) => `${item}!`)

// console.log(dectPush)

// 4 konsep functional programing

//pure function=> function yang tidak bergantung pada nilai diluar scope
function hitungJariJari(jari) {
    return 3.14 * (jari * jari)
}
const result = hitungJariJari(4)
// console.log(result)
//EEXAMPLE2
const createNewUser = (user, age) => {
    return { ...user, age }
}
const user = {
    name: 'BOOB',
    hoby: 'bola'
}
const newUser = createNewUser(user, 18)
// console.log(newUser)

//imutability=>dimana tdk merubah nilai dari function
const myArr = [4, 2, 7, 1, 6]
const duplicate = myArr.map((item) => `${item}`)
// console.log(duplicate)
//bagaimana jika harus merubah nilainya ?
const data = {
    firstName: 'Yuhu',
    lastName: 'pitteur' //typo
}
const renameNewLastName = (newLastName, data) => {
    return { ...data, lastName: newLastName }
}
const newUsers = renameNewLastName('potter', data)
// console.log(newUsers)

//Rekursif => fungsi yang memanggil dirinya sendiri
//contoh mau cetak 1-10 biasanya pakai for,while sekarang dgn rekursif
const countDown = (start) => {
    console.log(start)
    if (start > 0) countDown(start - 1)
}
// countDown(10)

//high-order-function=> sebuah fungsi yang dapat menerima,mengembalikan fungsi lain
//map() merupakan contoh dari high-order function

//buat map() versi sendiri

const names = ['Henky', 'ali', 'azki', 'pramata']

const arrMap = (arr, action) => {
    const loopTrough = (arr, action, newArr = [], index = 0) => {
        const item = arr[index]
        if (!item) return newArr
        return loopTrough(arr, action, [...newArr, action(arr[index])], index + 1)
    }
    return loopTrough(arr, action)
}

const newNames = arrMap(names, (nama) => `${nama}`)
// console.log({ names, newNames })

//array mathod 

//arr filter()
const students = [{ name: 'ali', nilai: 80 }, { name: 'zaki', nilai: 60 }, { name: 'budi', nilai: 90 }, { name: 'budi', nilai: 80 }]

const lulus = students.filter((students) => students.nilai >= 80)
// console.log(lulus)

//arr reduce
const totalNilai = students.reduce((temp, currentValue) => temp + currentValue.nilai, 0)
// console.log(totalNilai)

//arr some 
const even = myArr.some((e) => e % 2 === 0)
// console.log(even)

//arr find()

const findStudents = students.find((students) => students.name === 'budi')
// console.log(findStudents)

//arr sort()
const shorthing = myArr.sort()
// console.log(shorthing) 
//cara compare sort()
const compareNilai = (a, b) => { return a.nilai - b.nilai }
const resultSort = students.sort(compareNilai)
// console.log(resultSort)

//arr every()
const minNilaiLulus = 70;
const cekLulus = students.every((score) => score.nilai > minNilaiLulus)
// console.log(cekLulus)

//arr forEach()
names.forEach((name) => {
    console.log(`Halo ${name}`)
})

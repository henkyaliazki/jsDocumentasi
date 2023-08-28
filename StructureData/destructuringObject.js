/* 
 *Digunakan ketika ingin mengambil nilai dari suatu object yang sudah besar datanya
*/

const profile =
{
    firstName: 'Agus',
    lastName: 'Bagyo',
    age: 23
}
//destructuring biasa

// let firstName = profile.firstName
// console.log(firstName) //Agus

//? Bagaimana jika data yang mau diambil itu semua yang ada dalam object profile

// const { firstName, lastName, age } = profile
// console.log(firstName, lastName, age) // Agus, Bagyo, 23

//! Kita juga bisa menambahkan key dan value baru terhadap object 
const { firstName, lastName, age, isMan = true } = profile
// console.log(firstName, lastName, age, isMan) // Agus,Bagyo,23,true

//Soal latihan by chatgpt
/*
**Soal: Menampilkan Informasi Pelanggan**
Anda memiliki data pelanggan dalam bentuk objek. Buatlah sebuah program yang menggunakan destructuring object untuk mengekstrak informasi tertentu dari objek tersebut dan menampilkannya.

Data Pelanggan:
```javascript
const pelanggan = {
  nama: "Alice",
  usia: 28,
  alamat: "Jalan Merdeka No. 123",
  email: "alice@example.com"
};
```

Tugas Anda adalah membuat program yang menggunakan destructuring object untuk mengambil informasi "nama", "usia", dan "alamat" dari objek pelanggan. Kemudian, tampilkan informasi tersebut dalam format:
Contoh Output yang Diinginkan:
```
Pelanggan: Alice
Usia: 28 tahun
Alamat: Jalan Merdeka No. 123
```

**Petunjuk:**

1. Gunakan destructuring object untuk mengambil nilai dari properti "nama", "usia", dan "alamat".
2. Tampilkan hasilnya dalam format yang diinginkan.

Tugas Anda adalah mengimplementasikan program yang menggunakan destructuring object untuk menampilkan informasi pelanggan sesuai dengan contoh output yang diberikan.
*/

//Answer
const user =
{
    nama: "Alice",
    usia: 28,
    alamat: "Jalan Merdeka No. 123",
    email: "alice@example.com"
}
const { nama, usia, alamat } = user
// console.log(`Nama: ${nama},\nUsia: ${usia} tahun ,\nAlamat: ${alamat}`)

const dataKaryawan = [
    { nama: "Alice", usia: 30, jabatan: "Manager" },
    { nama: "Bob", usia: 25, jabatan: "Developer" },
    { nama: "Charlie", usia: 28, jabatan: "Designer" },
    { nama: "David", usia: 22, jabatan: "Intern" }
];

//get info karyawan name
const infoEmployees = () => {
    for (const karyawan of dataKaryawan) {
        console.log(`Nama : ${karyawan.nama}`)
        console.log(`Usia : ${karyawan.usia}`)
        console.log(`Jabatan : ${karyawan.jabatan}\n`)

    }
}
//get averange usia Karyawan
const sumAvrgs = (karyawan) => {
    const totalAge = karyawan.reduce((total, k) => total + k.usia, 0)
    return totalAge / karyawan.length
}

//get job by jabatan
const getByJob = (karyawan, jabatan) => karyawan.filter((element) => element.jabatan === jabatan)

//get sort by usia
const getAccAge = (karyawan) => karyawan.slice().sort((a, b) => a.usia - b.usia)

//call info karyawan
infoEmployees(dataKaryawan)

//call function sumAvgs
const getAvrgs = sumAvrgs(dataKaryawan)
console.log(`Rata-Rata Usia Karyawan: ${getAvrgs}\n`)

//call function getByJob
const getJob = getByJob(dataKaryawan, 'Developer')
console.log(`Karyawan dengan jabatan `, getJob, '\n')

//call function getAccAge
const getAsc = getAccAge(dataKaryawan);
console.log(`Urutan Karyawan berdasarkan Usia :`, getAsc)
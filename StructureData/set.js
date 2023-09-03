/* 
 *Set ialah data object yang memiliki value unique 
*/

//sintax penggunaan
const mySet = new Set([])

//contoh penggunaan
const newSet = new Set([1, 1, 2, 3, 3, 4])
const addValue = newSet.add(3, 5, 6) // mathode add hanya bisa menambahkan satu value
const addValueSet = newSet.add(5)
const deleteSet = newSet.delete(5)
console.log(newSet)

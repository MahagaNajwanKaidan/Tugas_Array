//Method filter()
//method filter() berfungsi untuk menyaring data dari array.
//parameter yang harus diberikan pada method filter() sama seperti 
//method forEach(), yaitu: sebuah fungsi callback.

// const angka = [1,2,3,4,5,6,7,,9];

// const filterArr = angka.filter((item) =>{
//     return item % 2 == 0
// });
// console.log(filterArr);

// const users = [{
//     nama : 'fifi',
//     umur : 33,
//     gender : 'female'
// },
// {
//     nama : 'gigi',
//     umur : 90,
//     gender : 'female'
// },
// {
//     nama : 'hadi',
//     umur : 87,
//     gender : 'male'
// },
// {
//     nama : 'kaila',
//     umur : 100,
//     gender : 'female'
// }];

// const usersMale = users.filter((user) => user.gender === 'female');

// console.log(usersMale);

// const users = [{
//     mobil : 'bmw',
//     pintu :  4,
//     bensin: 'pertamax',
    
// },
// {
//     mobil : 'pajero',
//     pintu : 4,
//     bensin: 'pertamax',
    
// },
// {
//     mobil : 'ferrari',
//     pintu : 2
//     bensin: 'pertamaxturbo',
    
// },
// {
//     mobil : 'lamborghini',
//     pintu : 2,
//     bensin: 'pertamaxturbo',
// }];

var mobil = [
    {
        merek : 'toyota',
        nama : 'supra',
        pintu : 2,
    },
    {
        merek : 'bmw',
        nama : 'bmw i8',
        pintu :  2,
    },
    {
        merek : 'mitsubushi',
        nama : 'expander',
        pintu : 4,
    },
    {
        merek : 'mitsubishi',
        nama : 'pajero',
        pintu : 4,
    },
    {
        merek : 'ferari',
        nama : 'ferari f45',
        pintu : 2,
    },
]
let b = parseInt(prompt("tentukan jumlah pintu (2 atau 4): "));
const mobilPintu = mobil.filter((mobil) => mobil.pintu === b);
console.log(mobilPintu);
document.write(mobilPintu);
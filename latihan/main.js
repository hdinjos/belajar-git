// // ini data string
// console.log("Nama saya hendi 12 &()");
// console.log("saya belajar di praxis academy");
// console.log("belajar js dasar");

// //data number
// console.log(5);
// console.log(10);
// console.log(-4);
// console.log(2.6);

// //data boolean
// console.log(true);
// console.log(false);

// //type data lanjutan

// // data array
// let arr1 = ['3', "lima", true];
// for (arr of arr1) {
//     console.log(arr);
// }

// //objek
// let table = {
//     color: "white",
//     long: 2
// }

// console.log(table.color);

// let chair; //deklarasi variable
// chair = 'green'; //assigment variable
// console.log(chair); //menampilkan variable


// let monitor = false; 
// console.log(monitor);
// monitor = 56 ;
// console.log(monitor);

// const laptop = 'punyaku';
// console.log(laptop);
// // laptop = "24";
// const LAPTOP = 'bukan punyaku';
// console.log(LAPTOP);

//global scope
// let fisrtName = "ahmad";
// let lastName = " efendi";

// console.log(fisrtName + lastName + " hobby: ngoding");

// let numA = 60;
// let numB = 3;
// let result = numA/numB;
// console.log("ini " + numA + " dibagi " +  numB + " hasilnya " + result);

// console.log(typeof(1+"1"));

// function halo(){
//     //local scope
//     console.log('halo saya belajar js')
// }

// console.log("Nama saya hendi 12 &()");
// console.log("saya belajar di praxis academy");
// console.log("belajar js dasar");

var app = new Vue({
    el: '#app',
        data: {
            message: false,
            bag: 5,
            condition: '60',
            classes: ['frontend', 'backend', 'fullstack'],
            jalan: 'masuk jurang'
        }
      })

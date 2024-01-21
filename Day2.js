// console.log(Math.PI);
// console.log(Math.E); 
// let num = 11;
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num)); // nearly to num
// console.log(Math.sqrt(num)); //Square root
// console.log(Math.abs(num)); //Absolute value // 0 from num
// console.log(Math.pow(8,2)); //power of first value 
// console.log(Math.min(3,4)); //minimum value
// console.log(Math.max(55,55.2)); //maximum value
//Random number
// let num = (Math.random() * 10) + 1;
// console.log(Math.ceil(num)); 
// for(i = 0; i < 10; i++) {
//     num = Math.ceil(Math.random(i) * 8  + 1);
//     console.log(num);
// }

// Premitive Data Types => stack memory
// let name = "mg mg"; //String
// let age = 12; //Number
// let con = true; //boolean
// let data = null; //object
// let dd; //undefined
// let sym = Symbol(); //symbol
// console.log(typeof(sym));

// Refrence Data Types  => heap memory
// let ary = ["one","two","three"]; //object
// let obj = {
//     name : "one",
//     age: 12,
// };//object
// console.log(typeof(obj));
// let date = new Date();
// let audio = new Audio();
// console.log(audio);

// let users = [
//     {
//         name: 'John',
//         age: 21,
//         school : 'Yangon'
//     },
//     {
//         name: 'Doe',
//         age: 23,
//         school : 'Mandalay'
//     },
//     {
//         name: 'Li',
//         age: 21,
//         school : 'China'
//     },
//     {
//         name: 'Xiang',
//         age: 21,
//         school : 'Singapore'
//     },
// ];
// users.forEach((user) => {
//     console.log(user.name);
//     console.log(user.age);
//     console.log(user.school);
// });
//Array Map
// users.map((user)=>{
//     console.log(user);
// })
//Find Index
// let test = users.findIndex(user => user.age == 21);
// console.log(users[test].name);
// let find = users.findIndex(user => user.name == 'Xiang');
// console.log(users[find]);

// For In Array Functions //
// let obj = {
//     name: 'Mg Mg',
//     age : 36,
//     car : {
//         name: 'toyota',
//         water: 'drink',
//     },
//     money : 123
// }
// let test = ["one", "two", "three", "four", "five", "six"];
// // for(x in test) {
// //     // console.log(x);
// //     // console.log(test[x]);
// // }
// for(x in obj) {
//     // console.log(x); Key
//     // console.log(obj[x]); Value
//     // console.log(obj.car.water);
//     // console.log("*********************");
// }

// let data = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque facere consequuntur, ipsum nihil, accusantium blanditiis, autem repellendus ab quibusdam minus error, corrupti nostrum, culpa explicabo odio saepe ullam modi tempore";

// let dd = data.split(" ");
// // console.table(dd);
// dd.forEach((test,i) => console.log(test,i));

// let test = ["one", "two", "three", "four", "five", "six"];
// // test.forEach((element,o) => {console.log(element,o);});
// for(let i = 0; i <test.length; i += 2) {
//     console.log(test[i]);
// }
// console.log("*********");

// let i = 0;
// while (i < test.length) {
//     console.log(test[i]);
//     i++;
// }
// console.log("*********");

// let a = 0;
// do {
//     console.log(test[a]);
//     a++;
// }while (a < test.length);

// let obj = [
//     {
//         name: "mg mg",
//         age: 22
//     },
//     {
//         name: "aung aung",
//         age: 23
//     }
// ]
// let i = 0;
// while (i < obj.length){
//     console.log(obj[i].name+" "+obj[i].age);
//     i++;
// }

//When Start and End point are already know ("For Loop")
//When End point is not sure ("While Loop")
//When at least one time work ("Do While Loop")


//When at least one time work ("Do While Loop")
//Answer out first and check Boolean Expression and Increment
// let i = 0;
// do {
//     console.log(i);
//     i++;
// }while(i < 10)
// Do While Loop

//When End point is not sure ("While Loop")
// let i = 0; //Initial Value
// while (i < 10) { //Boolean Expression
//     console.log("I value: " + i); //Answer Output
//     i++; //Increment
// }

//When Start and End point are already know ("For Loop")
// for (starting_value, boolean_Expression, increment);
// for( i=0; i < 10; i++ ){
//     console.log("This is " + i);
//     // How for loop work
//     // first i= 0;
//     // second i < 0;
//     // console.log("This is " + i);
//     // //i++;
// }

// let color = "black";
// let value;
// switch (color) {
//     case"green": 
//         value = "It's green"; 
//         break;        
//     case"yellow": 
//         value = "It's yellow"; 
//         break;
//     case"blue": 
//         value ="It's blue"; 
//         break;
//     case"alpha": 
//         value = "It's alpha"; 
//         break;
//     case "red": 
//         value = "It's red"; 
//         break; 
//     case "black": 
//         value = "It's black"; 
//         break; 
//     default:
//         value = "It's unknown";
//         break;
// }
// // console.log(value);
// // document.querySelector("#head").innerText = value;
// document.getElementById("head").innerText = value;

// if(40 > 60){
//     console.log("smaller");
// }else{
//     console.log("bigger");
// } 

// if(10 > 20){
//     console.log("false");
// }else if(10 == 20){
//     console.log("false");
// }else if(10 == 11){
//     console.log("true");
// }else{
//     console.log("tired");
// }

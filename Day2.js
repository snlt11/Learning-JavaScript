// let str = "123";
// console.log(str);
// console.log(typeof str);
// let num = Number(str);
// console.log(num);
// console.log(typeof num);

// let str = "2.323232234";
// let num = Number(str).toFixed(4);
// console.log(num);
// console.log(typeof num );

// Ternary operator
// num = 21;
// test = num == 21 ? true : false;
// console.log(test);

// function doIt(){
//     // z = 10;
//     // console.log(z);
//     return z;
// }
// // doIt();
// console.log(doIt());
// function test(name,age){
//     // console.log("Name is " + name + " and age is " + age);
//     return("Name is " + name + " and age is " + age);
// }
// // test("Mg mg",22)
// let answer = test("Aung Aung",22);
// console.log(answer);

// Template literals 
// let person = {
//     name : "John",
//     age : 22,
//     parent : ["U Ba", "Daw Mya"],
//     brother : "Doe",
//     sister : "Chel"
// }
// let test = `
//     <h2> ${person.name}</h2>
//     <ul>
//         <li>Name : ${person.age}</li>
//         <li>Father : ${person.parent[0]}</li>
//         <li>Mother : ${person.parent[1]}</li>
//         <li>Brother : ${person.brother}</li>
//         <li>Sister : ${person.sister}</li>
//     </ul>
// `;
// document.querySelector(".para").innerHTML = test;

// let one = {
//     number : 'one',
//     numberValue : 'none'
// }
// let two = `
//     <h1>${one.number}</h1>
//     <h2>${one.numberValue}</h2>
// `;
// document.querySelector(".testing").innerHTML = two;

// function test(name = "mg mg",age = 100){
//     console.log(`name: ${name} and age: ${age}`);
// }
// // test();
// test("aung aung",200);

// let test = function(){
//     console.log("this  is test");
// }
// test();
// let test = () => {
//     console.log("this is test"); 
// }
// test();
// let test = () => console.log("this is test");
// test();
// ( () => console.log("this is IIFE"))();

//Immediately Invoked Function Expression(IIFE)
// (function test(){
//     console.log("this is blah blah");
// })();

// // Function Inside Object
// let obj = {
//     name: "mg mg",
//     age : 10,
//     gg : function(){
//         console.log("this is the function inside the object");
//     }
// }
// obj.gg();


// let ary = [9,1,2,3,4,5,6,7,8,9];
// let str = "this is string";
// // console.log(ary.length);
// let test = Array.isArray(str);
// console.log(test);
// console.log(ary[3]);
// ary[3] = 1000;
// console.log(ary[3]);
// let int = ary.indexOf(5);
// console.log(int);

// console.log(ary);
// ary.push(100);  //add array[number] to the end of the array
// ary.pop(9); // last number removed from the array
// console.log(ary);
// ary.shift(9); // remove first number from array
// number.spliced(index,count)
// ary.splice(3, 4); 
// ary.reverse();
// ary.unshift(200); //add array[number] at the beginning
// console.log(ary);
//Combine Two Arrays
// let ary = [9,1,2,3,4,5,6,7,8,9];
// let ary2 = [11,12,13,14,15,16,17,18,19];
// let combine = ary.concat(ary2);
// console.table(combine);

// let now = new Date();
// console.log(now);
// console.log(now.getDay());
// console.log(now.getMonth()+1);
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.getTime());

// let now = new Date();
// let noww = now.toString;
// console.log(now);
// console.log(typeof noww);

// let now = new Date("8/8/2001 05:21");
// now.setFullYear(2024);
// now.setMonth(0);
// console.log(now);


// let numbers = [91, 16 , 1 , 2 ,13, 89, 45, 5 , 63, 71, 38];
// // function filter(x,y){
// //     return x - y;
// // }
// // numbers.sort(filter);
// // console.log(numbers);
// let numbers = [91, 16 , 1 , 2 ,13, 89, 45, 5 , 63, 71, 38];
// numbers.sort((x,y) => x - y);
// // console.log(numbers);
// let numbers = [91, 16 , 1 , 12 ,13, 44, 86, 45, 5 , 63, 71, 38];// Array Initialization methods
// // function under12(num){
// //     return num < 90;
// // }
// // let a = numbers.find(under12);
// // console.log(a);
// let result = numbers.find(x => x < 50);
// console.log(result);


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

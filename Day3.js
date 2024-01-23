// var num = 20;//Global Scope , redeclaredable
// let test = 200; //Block Scope(local variable)

// console.log(window.num);
// console.log(window.test);

// for(let i=0; i< 10; i++) {
//     console.log(i);
// }
// console.log(i);
// for(var i=0; i< 10; i++) {
//     console.log(i);
// }
// console.log("********************************");
// console.log(i);

// function doIt(){
//     var a = 10;
//     let b = 20;
//     console.log(a);
//     console.log(b);
// }
// doIt();

// let str = "This is a test string that contains a number of characters";
// // str += " that is expected to be in the format expected  by the";
// let add = "test string";
// let sum = str + add;
// console.log(str);
// console.log(sum);

//Concat
// let str = "this is a test string";
// let aa = "hello world is a test string";
// str = str.concat(" ** ",aa);
// console.log(str);

// let str = "this is a test string";
// test = str.toLowerCase();
// console.log(test[3]);
// console.log(str.lastIndexOf('t'));
// console.log(str.charAt(1));
// console.log(str.length);
//  console.log(str.substr(1,3))
//  console.log(str.slice(0,8));
// console.log(str.slice(-6));
// console.log(str.slice(-10,-4));
// console.log(str.split(" "));
// console.log(str);
// let bb = str.replace("test","result");
// console.log(bb);
// console.log(str.includes("is"));

// Window Object
// window.close();
// window.alert("123");
// let test = window.prompt("what is your name?");
// document.querySelector("#head").innerHTML = test;

// let con = confirm("Are you 18");
// let test = con ? "Yes I am" : "No i am not";
// document.querySelector("#head").innerText = test;

// document.querySelector("#head").innerText = window.innerHeight;
// document.querySelector("#head").innerText = window.innerWidth;

// let test = document.querySelector("#head");
// test.style.backgroundColor = "black";
// test.style.height = "4000px";
// test.style.color = "white";
// console.log(window.scrollY);
// window.location.href = "extra.html";
// document.querySelector("#btn").addEventListener('click', function(){
//     // window.location.href = "extra.html";
//     // window.location.reload();
//     console.log(window.location.search);
// })

// DOM
// console.log(document.all[4]);
// console.log(document.URL);
// console.log(document.characterSet);
// Form Handling
// console.log(document.forms[2].action);
// console.log(document.forms[1].method);
// console.log(document.links);
// console.log(document.links[0].innerText);
// console.log(document.links[1].className);
// console.log(document.images[1].currentSrc)
// console.log(document.images[1].src);
// console.log(document.images[1].alt);
// console.log(document.scripts);
// console.log(document.scripts[0].baseURI);

// let scripts = document.scripts;
// // ScriptAry = Array.from(scripts);
// // ScriptAry.forEach(function (script) {
// //     console.log(script.src);
// // });
// // console.log(scripts);

// // let btn = document.querySelector('.btn');
// // btn.onclick = function () {
// //     alert("123");
// // }

// // let test = document.querySelector('img');
// // let test = document.querySelectorAll('img');
// // console.log(test);

// // let list = document.querySelector('ul li:first-child > a');
// // let list = document.querySelector('ul li:nth-of-type(2) > a');
// // let list = document.querySelector('ul li:nth-child(1) > a');
// // list.style.color = 'red';

// // All Color Change
// // let list = document.querySelectorAll('ul li');
// // for (let i = 0 ; i< list.length ; i++) {
// //     let aTag = list[i].querySelector('a');
// //     aTag.style.color = 'red';
// // }
// // console.log(list.length);

// /*
// 1.Element
// 2.Attribute
// 3.Text Note
// 8.Comment
// 9.Document ItSelf
// 10.Doc type
// */
// // let list = document.querySelector('.als');
// // console.log(list.children[1].childNodes[0].textContent);
// // for(let i = 0; i < list.childNodes.length; i++) {
// //     let node = list.childNodes[i];
// //     // console.log(node.nodeType);
// //     if(node.nodeType == 1){
// //         console.log(node.childNodes[0].textContent);
// //     }
// // }

// // let list = document.querySelector('.lis');
// {/* <li><a href="">Six</a></li> */}
// // let li = document.createElement('li');
// // let textNode = document.createTextNode("test");
// // li.appendChild(textNode);
// // list.appendChild(li);
// // console.log(list);

// // let aaNote = document.createTextNode("Six");
// // let aa = document.createElement('a');
// // aa.setAttribute('href', '#')
// // aa.appendChild(aaNote);
// // let li = document.createElement('li');
// // let cc = li.appendChild(aa);
// // list.appendChild(cc);

// // let text = document.createTextNode("Six");
// // let aTag = document.createElement('a');
// // aTag.setAttribute('href', '#');
// // aTag.appendChild(text);
// // let li = document.createElement('li');
// // li.appendChild(aTag);
// // list.appendChild(li);

// // let oldH1 = document.querySelector('#head');
// // let text = document.createTextNode("This is the new head");
// // let newH1 = document.createElement('h1');
// // newH1.appendChild(text);
// // newH1.className = 'new-className';
// // newH1.id = 'new-id'
// // // let body = document.querySelector('body');
// // let body = oldH1.parentNode;
// // body.replaceChild(newH1,oldH1);
// // console.log(newH1)

// // let lis = document.querySelector("ul.lis");
// // let firstChild = document.querySelector("ul > li:first-Child");
// // let tag = firstChild.childNodes[0].getAttribute("alt");
// // console.log(tag);

// let btn = document.querySelector(".btn");
// // btn.onclick = function() {
// //     alert("123");
// // }
// // btn.onclick = () => {
// //     alert("123");
// // }
// // btn.onclick = (e) => alert(e);
// // btn.onclick = (e) => console.log(e);
// // e = Object Pointer Event

// // btn.addEventListener("click", function(e) {
// //     // console.log(e);
// //     alert(e);
// // });
// // btn.addEventListener("click", (e) => alert(e));
// // btn.addEventListener("click", (e) => console.log(e.type));
// // btn.addEventListener("dblclick", (e) => alert(123)); //Double click

// // let btnone = document.querySelector(".btnOne");
// // let btntwo = document.querySelector("#btnTwo");

// // // btnone.onclick = (e) => console.log(e.target);
// // // btntwo.addEventListener('click', (e) => console.log(e.target));

// // btnone.onclick = (e) => console.log(e.target.innerText);
// // btntwo.addEventListener('click', (e) => console.log(e.target.innerText));
// // btnone.onmouseout = (e) => console.log(e.target);
// // btntwo.addEventListener('mouseenter', (e) => console.log(e.target));
// // btnone.onmousemove = (e) => console.log(e.target);

// let form = document.querySelector('form');
// let link = document.querySelector('#togoogle')

// // link.addEventListener('click', (e) => {
// //     e.preventDefault();
// //     console.log("heyhey")
// // });

// // form.addEventListener('submit', function (e) {
// //     e.preventDefault();
// //     console.log(e);
// // } );

// let input = document.querySelector('#inn');
// input.addEventListener('blur',(e)=> {
//     alert(123);
// });
// // form.addEventListener('submit', function (e) {
// //     e.preventDefault();
// //     console.log(input.value);
// // });
// // input.addEventListener('keydown',(e) => console.log(input.value) );

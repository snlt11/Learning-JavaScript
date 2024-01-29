/*
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.getAge = function(){
    return this.age;
}

let person = new Person("Mg Mg" , 10);
console.log(person.getAge());


function Car(name, speed){
    this.name = name;
    this.speed = speed;
}
Car.prototype.carpro = function(){
    return `Car name : ${this.name} && Car Speed : ${this.speed}`;
}

// car = new Car("toto","189");
// console.log(car);
// console.log("************");
// console.log(car.carpro());
**************************************************************
function toyota(name, speed){
    Car.call(this, name, speed);
}
toyota.prototype = Object.create(Car.prototype);

let toyo = new toyota(toyota,123)
console.log(toyo.carpro());

const carproto = {
    getName : function(){
        return this.name;
    },
    getSpeed : function(){
        return this.speed;
    }
}

let car = Object.create(carproto);
car.name = "Toyota";
car.speed = 100;
let bar = Object.create(carproto, {
    name : {value: "Yoyota"},
    speed : {value: 323}
});
// console.log(car.getName());
console.log(bar);
**************************************************************
class Person{
    static name = "John";
    static age = 12;
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    static getInfo(){
        console.log(this.name + " " + this.age);
    }
}
let p = new Person("mgmg",20);
// console.log(p.name + " " + p.age);
// console.log(p.getName());
Person.getInfo();
// ES5 End

// Constructor 
class Car{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    getSpeed(){
        console.log(this.speed);
    }
}
class max extends Car{
    constructor(name,price,speed){
        super(name,price);
        this.speed = speed;
    }
    getSpeed(){
        console.log("this is max speed");
    }
}
let bb = new max("Maxxx",222,1552);
// console.log(bb.name)
bb.getSpeed();

****************************************************************

    0 request not initialized
    1 sever connection established
    2 request received
    3 processing request
    4 request finished and response is ready    
    HTTPs status code
    200 OK
    403 Forbidden
    404 Not found
    500 Internal Server Error
****************************************************************
let url = "https://jsonplaceholder.typicode.com/posts";
let xhr = new XMLHttpRequest();
let postColumn = document.querySelector("#post-column");
xhr.open('GET', url, true);
xhr.onreadystatechange = function() {
    if(this.status === 200 && this.readyState == 4){
        let res = xhr.responseText;
        let jsons = JSON.parse(res); 
        let str = "";
        
        jsons.forEach(post => {
            str += `
            <div class="col-md-3 mb-1">
             <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${post.title}</h5>
                  <p class="card-text">${post.body}</p>
                  <a href="#" class="btn btn-primary btn-sm">Detail</a>
                </div>
              </div>
            </div>
            `;
        });
        postColumn.innerHTML = str;
    }
}
xhr.onprogress = function(){
    console.log("progress********************************");
}
xhr.onerror= function(error){
    console.log(error);
}
xhr.send();
****************************************************************
let url = "https://jsonplaceholder.typicode.com/posts";
let postColumn = document.querySelector("#post-column");
function loadData(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.onload = function(){
        if(this.status === 200){
            let res = xhr.responseText;
            let jsons = JSON.parse(res); 
            let str = "";
            jsons.forEach(post => {
                str += `
                <div class="col-md-3 mb-1">
                 <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${post.title}</h5>
                      <p class="card-text">${post.body}</p>
                      <a href="#" class="btn btn-primary btn-sm">Detail</a>
                    </div>
                  </div>
                </div>
                `;
            });
            postColumn.innerHTML = str;
        }
    }
    xhr.send();

}

loadData();

****************************************************************

let url = "https://jsonplaceholder.typicode.com/posts";
let postColumn = document.querySelector("#post-column");

function makeColumn(result){
    let jsons = JSON.parse(result); 
    let str = "";
    jsons.forEach(post => {
        str += `
        <div class="col-md-3 mb-1">
         <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.body}</p>
              <a href="#" class="btn btn-primary btn-sm">Detail</a>
            </div>
          </div>
        </div>
        `;
    });
    postColumn.innerHTML = str;
}
function loadData(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.onload = function(){
        if(this.status === 200){
            makeColumn(this.responseText)  
        }
    }
    xhr.send();

}
loadData();
****************************************************************
let url = "https://jsonplaceholder.typicode.com/posts";
let postColumn = document.querySelector("#post-column");

function makeColumn(result){
    let jsons = JSON.parse(result); 
    let str = "";
    jsons.forEach(post => {
        str += `
        <div class="col-md-3 mb-1">
         <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.body}</p>
              <a href="#" class="btn btn-primary btn-sm">Detail</a>
            </div>
          </div>
        </div>
        `;
    });
    postColumn.innerHTML = str;
}
function loadData(callback){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.onload = function(){
        if(this.status === 200){
            callback(this.responseText)  
        }
    }
    xhr.send();

}
loadData(makeColumn);

function show(text){
    console.log(text);
}

function callBack(num1,num2,callback){
    let sum = num1 + num2;
    callback(sum);
}
callBack(4,5,show);
*************
function callback(){
    console.log("done");
}
function backcall(value){
    value();
}
backcall(callback);

****************************************************************
let url = "https://jsonplaceholder.typicode.com/posts";

function loadData(){
    let xhr = new XMLHttpRequest();
    return new Promise((resolve,reject) =>{
        xhr.onload = function(){
            if(this.status == 200){
                resolve(this.responseText);
            }else{
                reject("something went wrong");
            }
        }
        xhr.open("GET", url, true);
        xhr.send();
    })
}
loadData()
    .then((responseText) => console.log(responseText))
    .catch((error) => console.log(error));

****************************************************************
Promise
let url = "https://jsonplaceholder.typicode.com/posts";
let GetData = function(){
    let xhr = new XMLHttpRequest();
    return new Promise((resolve,reject)=> {
        xhr.onload = function(){
            if(this.status === 200){
                resolve(this.responseText);
            }else{
                reject("something went wrong");
            }
        }
        xhr.open("GET", url);
        xhr.send();
    })
}
GetData()
    .then(responseText => console.log(responseText))
    .catch(error => console.log(error));


****************************************************************
Fetch
let url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
    .then(respeose => {return respeose.text()})
    .then(responseText => console.log(responseText))
    .catch(error => console.log(error));
****************************************************************
Array functions
let doIt = function() {
    console.log("this is a post");
};
let doIt2 = () => {
    console.log("this is second do it");
}
let doIt3 = (name) => console.log(`this is third do it ${name}`);

doIt3("mg mg");

****************************************************************
Array Map
let names = ["mg mg","aung aung","kyaw kyaw","su su","nu nu"];
names.map( function(index){
    console.log(index);
})
******************
let students = [
    {
        name: "Mg Mg",
        age : 21,
        drink : "water"
    },
    {
        name: "Aung Aung",
        age : 33,
        drink : "juice"
    },
]
students.map(function(index){
    console.log(index);

    console.log(index.name);
    console.log(index.age);
    console.log(index.drink);
})
*/
/*let url = "https://jsonplaceholder.typicode.com/posts";

async function loadData(){
    const result = new Promise((resolve, reject) =>{
        let xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(this.status === 200){
                resolve(xhr.responseText);
            }else{
                reject("Data error");
            }
        }
        xhr.open("GET", url);
        xhr.send();
    })
    const con = await result;
    return result;
}
loadData()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
**********************************************
let url = "https://jsonplaceholder.typicode.com/posts";
function loadData(){
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((result) => resolve(result.text()))
            .catch((err) => reject(err));
    })
}
loadData()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
****************************************************************
// exec(index) / test(bol) / match(bol) /search(index)
let reg = /water/i;
let email = "this is a test email address drink Water";
// let result = reg.test(email);
// let result = reg.exec(email);
// let result = email.match(reg);
let result = email.search(reg);

console.log(result);
****************************************************************
function personIterator(persons) {
    let personIndex = 0;
    return{
        next: () => {
            return personIndex < persons.length ?
            {value: persons[personIndex++],done : false} :
            {done:true};
        }
    }
    
}

let persons = ["mgmg","john","fred","david"];

let person = personIterator(persons);
// console.log(person.next());

let result = person.next();
result = person.next();
result = person.next();
result = person.next();

if(!result.done) {
    console.log(result.value);

}

//Generator
function* numGem(){
    yield 1;
    yield 2;
    yield 3;
}
let num = numGem();
console.log(num.next());
****************************************************************
let Key1 = Symbol('');
let Key2 = Symbol('key2');

let obj = {}

obj[Key1] = "this is a key 1";
obj[Key2] = "this is a key 2";
obj.Key3 = "this is a key 3";
obj.Key4 = "this is a key 4";
 
console.log(obj[Key1]);
**************************
let a = 3 ,
    b = 10,
    c = 23;

console.log(a,b,c);


let a , b, c;
[a,b,c,...r] = [1,2,3,4,5,6,7,8];
[{a,b,c,...r}] = [{a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8}];

function test(){
    return [1,2,3,4,5,6,7,8];
}
let [a,b,c,...r] = test();

console.log(a);
console.log(b);
console.log(c);
console.log(r);



let person = {
    name: 'John',
    age: 34,
    Sen : function(){
        return "John is 34 YEAR old"
    }
}
let {name, age ,Sen} = person;
console.log(Sen());
// console.log(person.Sen());

let map = new Map();
map.set('name', 'John');
map.set('age',22);
map.set('drinks','water');

// console.log(map.get('name'));
// map.forEach((v,k) => {
//     console.log(`${k} is ${v}`);
// })
let ary = Array.from(map.keys());
let ary1 = Array.from(map.values());
let ary2 = Array.from(map);
console.log(ary2);


let set = new Set();
set.add("mgmg");
set.add("11");
set.add(() => console.log("this is set function"));
console.log(set.size);

let set = new Set(["mmgmg",11,()=> console.log("this is set function")]);
console.log(set);

let set = new Set(["mgmg",11,()=> console.log("this is set function")]);
console.log(set.has("mgmg"));
set.delete("mgmg");
console.log(set);

*/
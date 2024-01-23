let form = document.querySelector('form');
let inputName = document.querySelector('#name');
let inputAge = document.querySelector('#age');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = inputName.value;
    let age = inputAge.value;
    // console.log('name: ' + name + ' age: ' + age);
    let user = {
        "name": name,
        "age": age,
    }
    addData(user);
});

let addData = (obj) => {
    let data = JSON.stringify(obj)
    localStorage.setItem('localDatabase', data)
}

let getDataFromDb = () => {
    let str = localStorage.getItem('localDatabase');
    let obj = JSON.parse(str);
    return obj;
}

let btnDelete = document.querySelector('.btnD');
let deleteData  = () => {
    localStorage.removeItem('localDatabase');
}
btnDelete.addEventListener('click', deleteData);
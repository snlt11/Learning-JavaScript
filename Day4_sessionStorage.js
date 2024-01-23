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
    addDataToDb(user);
});

let addDataToDb = (userObject) => {
    let userArray = getFromDb();
    // console.log(userArray); // result == null
    if(userArray == null){
        userArray = [];
        userArray.push(userObject);
        saveToDb(userArray);
    }else{
        let nameCheck = userArray.findIndex(user=>user.name == userObject.name)
        if(nameCheck == -1){
            userArray.push(userObject);
            saveToDb(userArray);
        }else{
            alert("User already exists");
        }
    }
}

let getFromDb = () => {
    let str = sessionStorage.getItem('userDatabase');
    let arrayObject = JSON.parse(str);
    return arrayObject;
}

let saveToDb = (arrayObject) => {
    let saveData = JSON.stringify(arrayObject);
    sessionStorage.setItem('userDatabase',saveData);
}

let btnDelete = document.querySelector('.btnD');
let deleteData  = () => {
    sessionStorage.removeItem('userDatabase');
}
btnDelete.addEventListener('click', deleteData);
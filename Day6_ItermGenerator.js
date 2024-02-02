let users = [
    {
        name : 'John',
        age : 21,
        Drink : 'water',
        Status : 'active',
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },    {
        name : 'Doe',
        age : 24,
        Drink : 'cola',
        Status : 'Offline',
        image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        name : 'Sean',
        age : 25,
        Drink : 'tea',
        Status : 'active',
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    },    
    {
        name : 'Eddie',
        age : 31,
        Drink : 'coke',
        Status : 'offline',
        image: "https://randomuser.me/api/portraits/men/4.jpg"
    },
];
function personIterator(tester) {
    let testerIndex = 0;

    return{
        next: function() {
            return testerIndex < tester.length ?
            {value : tester[testerIndex++],done : false} :
            {value : tester[testerIndex],done : true}; 
        }
    }
}


let persons = personIterator(users);

let btn = document.querySelector("#btn");
let imageDisplay = document.querySelector(".imageDisplay");
let infoDisplay = document.querySelector(".infoDisplay");
btn.addEventListener("click", changePerson);

function changePerson() {
    let person = persons.next();
    if(!person.done){
        //persons.next().value.image  == person.value.image
        imageDisplay.innerHTML = `<img src="${person.value.image}" class="rounded mx-auto d-block" alt="user">`;
        infoDisplay.innerHTML = `                
            <ul class="list-group">
                <li class="list-group-item">Name : ${person.value.name}</li>
                <li class="list-group-item">Age : ${person.value.age}</li>
                <li class="list-group-item">Drink : ${person.value.Drink}</li>
                <li class="list-group-item">Status : ${person.value.Status}</li>
            </ul>`;
    }else{
        window.location.reload();
    }
}
changePerson();

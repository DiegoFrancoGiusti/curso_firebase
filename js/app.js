

// REAL TIME DATABASE
let userList = document.getElementById('userList') 
let nameInput = document.getElementById('nameInput')
let ageInput = document.getElementById('ageInput')
let addButton = document.getElementById('addButton')

addButton.addEventListener('click', function (){
    create(nameInput.value, ageInput.value)
})

function create(name, age){
    let data = {
        name: name,
        age: age
    }

    return firebase.database().ref().child('users').push(data)
}

//Listar usuários
firebase.database().ref('user').on('value', function(snapshot){
    userList.innerHTML = ""
    snapshot.forEach(function(item){
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().name + ': ' + item.val().age))
        userList.appendChild(li)
    })
})
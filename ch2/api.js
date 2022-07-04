let urlUsers = "https://jsonplaceholder.typicode.com/users";
let urlAlbums = "https://jsonplaceholder.typicode.com/users/1/albums";

let forma1 = function() {
let data = [];
fetch(urlUsers) //solicitamos los datos
    .then(response => response.json()) //se resuelve la promesa y la respuesta la convertimos a json
    .then(response => data.push(response))
    .then(data => console.log(data)) // leemos el objeto data y lo mostramos
    .catch(error => console.log(error)) // si aparece un error lo atrapamos.
    return data;
}

//obtener albums
let forma2 = async function getAlbums() {
    let response = await fetch(urlAlbums);
    let data = await response.json();
  return data;
}

    //obtener usuarios
    function getUsers(data) {
        console.log(data);
        console.log(typeof data);
let mostrarUsuarios = ""
    for (let i = 0; i < data.length; i++){
    mostrarUsuarios += $;{data[i].id} +
                        $;{data[i].name}; +
                        $;{data[i].username}; +
                        $;{data[i].email}; +
                        $;{data[i].street}; +
                        $;{data[i].suite}; +
                        $;{data[i].city}; +
                        $;{data[i].website}; +
                        $;{data[i].company};
        };
  return mostrarUsuarios
}

function getAlbums(data){
return data;
}

console.log(getUsers(forma1()));
console.log(getAlbums(forma2()))

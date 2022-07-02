let urlUsers = "https://jsonplaceholder.typicode.com/users";
let urlAlbums = "https://jsonplaceholder.typicode.com/users/1/albums";

fetch(urlUsers) //solicitamos los datos
    .then(response => response.json()) //se resuelve la promesa y la respuesta la convertimos a json
    .then(data => console.log(data)) // leemos el objeto data y lo mostramos
    .catch(error => console.log(error)) // si aparece un error lo atrapamos.

let mostrarData = data => {
    console.log(data);

    //obtener usuarios
    let mostrarUsuarios = "";
    for (let i = 0; i < data.length; i++) {
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
    return mostrarUsuarios(data)
}

//obtener albums
async function getAlbums(...params) {
    let [id, cb] = params;

    let data = await cb(urlAlbums);
    let albums = [...data];
    let filtered = filterById(id, albums);
    console.log(filtered);
}

function filterById(...params) {
    let [id, albums] = params
    return albums.filter(e => e.id === id);
}

getUsers()
getAlbums()

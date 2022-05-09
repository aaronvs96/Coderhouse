const boton = document.querySelector("#btn");
const container = document.querySelector(".container");

//OBTENER DE UN ARCHIVO DE TEXTO
// const obtenerDatos = () =>{
//     // fetch(url, configuracionOpcional)
//     fetch("prueba.txt")
//         .then(response => response.text())
//         .then(result => container.innerHTML += `<p>${result}</p>`)
//         .catch(error => console.log(error))
// }


//OBTENER DE UN JSON EN CARPETA
// const obtenerDatos = () =>{
//     // fetch(url, configuracionOpcional)
//     fetch("datos.json")
//         .then(response => response.json())
//         .then(result => {
//             let datos = result;
//             datos.forEach(user => {
//                 container.innerHTML += `
//                     <h3>${user.nombre}</h3>
//                     <p>${user.edad}</p>
//                     <p>${user.profesion}</p>
//                 `
//             })
//         })
//         .catch(error => console.log(error))
// }


//OBTENER DE UNA API
// const obtenerDatos = () =>{
//     // fetch(url, configuracionOpcional)
//     fetch("https://randomuser.me/api/")
//         .then(response => response.json())
//         .then(result => {
//             let datos = result.results;
//             datos.forEach(user => {
//                 container.innerHTML += `
//                     <img src="${user.picture.medium}">
//                     <h3>${user.name.first}</h3>
//                     <p>${user.cell}</p>
//                     <p>${user.email}</p>
//                 `
//             })
//         })
//         .catch(error => console.log(error))
// }

//ENVIAR DATOS
const url = "https://jsonplaceholder.typicode.com/posts";
// const obtenerDatos = ()=>{
//     fetch(url,{
//         method: "POST",
//         body: JSON.stringify({
//             title: "Nuevo post",
//             body: "post de prueba",
//             userId: 53
//         }),
//         headers: {'content-type':"aplication/json"}
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
// }

const obtenerDatos = async () => {
    try {
        let response = await fetch(url);
        let result = await response.json();
        result.forEach()
    }catch(error){
        console.log(error);
    }
    
}


boton.onclick = () => {
    obtenerDatos();
}
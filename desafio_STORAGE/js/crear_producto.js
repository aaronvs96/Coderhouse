// CLASE MOTO
class Moto {
    constructor(numeroMoto, marcaMoto, nombreMoto, precioMoto) {
        this.numeroMoto = numeroMoto;
        this.marcaMoto = marcaMoto;
        this.nombreMoto = nombreMoto;
        this.precioMoto = precioMoto;
    }
}

//VARIABLES
listaProductos = [];
const btn_agregar_producto = document.getElementById("btn_agregar_producto");

//FUNCIONES CREAR PRODUCTO
const crearProducto = () =>{
    let numero = document.getElementById("id_numero").value;
    let marca = document.getElementById("id_marca").value;
    let nombre = document.getElementById("id_nombre").value;
    let precio = document.getElementById("id_precio").value;

    const nuevoProducto = new Moto(numero, marca, nombre, precio);
    console.log(nuevoProducto);

    let listaNueva =[];
    if (localStorage.getItem("Productos") != null) {
        listaNueva = JSON.parse(localStorage.getItem("Productos"));
        listaNueva.push(nuevoProducto);
        localStorage.setItem("Productos", JSON.stringify(listaNueva));
    } else {
        listaProductos.push(nuevoProducto);
        localStorage.setItem("Productos", JSON.stringify(listaProductos));
    }
    return nuevoProducto;
}

const verificarStorage = () => {
    let lista = [];
    if (localStorage.getItem("Productos") != null) {
        lista = JSON.parse(localStorage.getItem("Productos"));
        return lista;
    }
}

const guardar = () => {
    crearProducto();
    if (verificarStorage() != undefined) {//si es que tengo algo en el storage
        localStorage.setItem("Productos", JSON.stringify(verificarStorage()))
    } else {
        localStorage.setItem("Productos", JSON.stringify(listaProductos));
    }
    location.reload();
}

const eliminarProducto = (numeroMoto) => {
    let listaVieja = JSON.parse(localStorage.getItem("Productos"));
    let listaFiltrada = listaVieja.filter(obj => obj.numeroMoto != numeroMoto);
    localStorage.setItem("Productos", JSON.stringify(listaFiltrada));
    location.reload();
}

const imprimirDatos = () => {
    if (verificarStorage() != undefined) {
        verificarStorage().forEach(obj => {
            document.querySelector("table").innerHTML += `
                <tr>
                    <td>${obj.numeroMoto}</td>
                    <td>${obj.marcaMoto}</td>
                    <td>${obj.nombreMoto}</td>
                    <td>${obj.precioMoto}</td>
                    <td><button onclick="eliminarProducto(${obj.numeroMoto})">X</button></td>
                </tr>`;

        })
    }
    
}

btn_agregar_producto.addEventListener("click", () => {

    guardar();
}
)
imprimirDatos();


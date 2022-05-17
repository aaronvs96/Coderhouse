const verificarStorage = () => {
    let lista = [];
    if (localStorage.getItem("Carrito") != null) {
        lista = JSON.parse(localStorage.getItem("Carrito"));
        return lista;
    }
}


const eliminarProducto = (idMoto) => {
    swal({
            title: "Eliminar producto",
            text: `¿Eliminar?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((resultado) => {
            if (resultado) {
                swal("Producto eliminado",{button:false});
                let listaVieja = JSON.parse(localStorage.getItem("Carrito"));
                let listaFiltrada = listaVieja.filter(obj => obj.idMoto != idMoto);
                localStorage.setItem("Carrito", JSON.stringify(listaFiltrada));
                setTimeout(() => {
                    location.reload();
                }, 300)

            } else {
                swal("No se eliminó el producto");
            }
        })

}


const imprimirDatos = () => {
    if (verificarStorage() != undefined) {
        verificarStorage().forEach(obj => {
            document.querySelector("table").innerHTML += `
                <tr>
                    <td>${obj.idMoto}</td>
                    <td><img src="${obj.imgMoto}" width="300px" height="220px"></td>
                    <td>${obj.marcaMoto}</td>
                    <td>${obj.nombreMoto}</td>
                    <td>${obj.precioMoto}</td>
                    <td><button class="btn btn-danger" onclick="eliminarProducto(${obj.idMoto})">X</button></td>
                </tr>
                `;
        })
    }

}

imprimirDatos();
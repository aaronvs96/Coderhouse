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
                swal("Producto eliminado", { button: false });
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


//FORMATO DOLARES
const formatoDolares = (monto) => {
    const options2 = { style: 'currency', currency: 'USD' };
    const numberFormat2 = new Intl.NumberFormat('en-US', options2);

    // console.log(numberFormat2.format(monto));
    return numberFormat2.format(monto);
}



let precioFinal=0;
const sumaCarrito = document.getElementById("resultadoCarrito");
const carritoVacio = document.getElementById("carritoVacio");
const aviso = document.getElementById("aviso");
const tabla = document.getElementById("tabla");

// const btn_pagar = document.getElementById("btn_pagar");
// const btnComprar = document.createElement("button");
const imprimirDatos = () => {
    if (verificarStorage() != undefined) {
        tabla.className = "mostrar_tabla";//si es que hay datos en el localstorage entonces se muestra la tabla
        verificarStorage().forEach(obj => {
            document.querySelector("table").innerHTML += `
                <tr>
                    <!--<td>${obj.idMoto}</td>-->
                    <td><img src="${obj.imgMoto}" width="300px" height="220px"></td>
                    <td>${obj.marcaMoto}</td>
                    <td>${obj.nombreMoto}</td>
                    <td>${formatoDolares(obj.precioMoto)}</td>
                    <td><button class="btn btn-danger" onclick="eliminarProducto(${obj.idMoto})">X</button></td>
                </tr>
                `
            precioFinal += parseInt(obj.precioMoto);
            // console.log(precioFinal);
            
        });
        
        sumaCarrito.innerHTML = `Total: ${formatoDolares(precioFinal)}`;//mostrando el precio final por la compra de motos
        
        aviso.className = "mostrar_aviso";
        // btn_pagar.className = "mostrar_boton_pagar";//se muestra el botón btn_pagar
        // btn_pagar.addEventListener("click",()=>{
        //     // const datos_pago = 
        // })
    }else{
        carritoVacio.className = "mostrar_carritoVacio";
    }

}

imprimirDatos();
//VARIABLES
marca1 = "NEXUS"; moto1 = "Nexus 11V"; precio1 = 890;
marca2 = "YAMAHA"; moto2 = "Yamaha NMAX"; precio2 = 16838;
marca3 = "HONDA"; moto3 = "Honda X-Blade"; precio3 = 2685;
marca4 = "HONDA"; moto4 = "Honda Navi 110"; precio4 = 1499;
marca5 = "YAMAHA"; moto5 = "Yamaha Crypton T110"; precio5 = 6484;

let nuevoTextoH = "";
nuevoTextoH = document.createElement("p");
//CLASE MOTO
class Moto {
    constructor(marcaMoto, nombreMoto, precioMoto) {
        this.marcaMoto = marcaMoto;
        this.nombreMoto = nombreMoto;
        this.precioMoto = precioMoto;
    }

    calcularCuota(cantidadCuota) {
        let texto = "";
        let interesCuota = 0.25;
        let valorCuotaInteres = 0;
        let valorCuota = this.precioMoto / cantidadCuota;
        let precioFinal = 0;
        console.log("\n**************************************************")
        console.log("**************************************************")

        if (cantidadCuota == 1) {
            texto = `Producto elegido: ${this.nombreMoto} -- Precio al contado: $${this.precioMoto}`;
            nuevoTextoH.innerHTML = `Producto elegido: ${this.nombreMoto} -- Precio al contado: $${this.precioMoto}`;

        } else if (cantidadCuota >= 2) {
            texto += `Producto: ${this.nombreMoto} -- Precio al contado: $${this.precioMoto}`;
            texto += "\nResumen de cuotas:";
            nuevoTextoH.innerHTML = `Producto: ${this.nombreMoto} -- Precio al contado: $${this.precioMoto}`;
            nuevoTextoH.innerHTML += `<br>Resumen de cuotas: `;

            for (let i = 1; i <= cantidadCuota; i++) {
                valorCuotaInteres = Math.round(valorCuota + (interesCuota * valorCuota));
                texto += `\nCuota ${i}: $${valorCuotaInteres}`;
                nuevoTextoH.innerHTML += `<br>Cuota ${i}: $${valorCuotaInteres}`;
                precioFinal += valorCuotaInteres;
            }

            texto += "\n-----------------------------";
            texto += `\nInterés por cuota: ${interesCuota * 100}%`;
            texto += `\nEl precio final de tu moto es de $${precioFinal}`;

            nuevoTextoH.innerHTML += `<br>-----------------------------`;
            nuevoTextoH.innerHTML += `<br>Interés por cuota: ${interesCuota * 100}%`;
            nuevoTextoH.innerHTML += `<br>El precio final de tu moto es de $${precioFinal}<br>`;

        }
        const resultadoCotizacion = document.getElementById("resultadoCotizacion");
        resultadoCotizacion.className = "mostrarCotizacion";
        document.getElementById("resultadoCotizacion").append(nuevoTextoH);
        return texto;
    }

    filtroMarca(valorBuscado) {
        let texto = "";
        let textoFiltro = "";
        if (valorBuscado != "") {
            const resultado = listaMotos.filter((el) => el.marcaMoto.includes(valorBuscado.toUpperCase()));

            console.log("\n*************** PAGINA DE FILTROS ***************\nBuscando por 'marca'.")
            console.log(`Elemento buscado: '${valorBuscado}'`)
            console.log(`${resultado.length} resultados encontrados.`)

            textoFiltro = document.createElement("p")
            textoFiltro.innerHTML = `<br><h3>*************** PAGINA DE FILTROS ***************</h3><br>Buscando por 'marca'<br>`;
            textoFiltro.innerHTML += `<h5>Elemento buscado: '${valorBuscado}'</h5><br>`;
            textoFiltro.innerHTML += `<h5>${resultado.length} resultados encontrados.</h5><br><br>`;

            for (const el of resultado) {
                texto += `Marca: ${el.marcaMoto}\nNombre: ${el.nombreMoto}\nPrecio: $${el.precioMoto}\n\n`;
                textoFiltro.innerHTML += `Marca: ${el.marcaMoto}<br>Nombre: ${el.nombreMoto}<br>Precio: $${el.precioMoto}<br><br>`;
            }
            document.getElementById("resultadoFiltro").append(textoFiltro);
        } else {
            alert("Por favor ingrese un valor.");
        }
        return texto;
    }
}


//ARRAY
const listaMotos = [];

//AGREGANDO AL ARRAY
listaMotos.push(new Moto(marca1, moto1, precio1));
listaMotos.push(new Moto(marca2, moto2, precio2));
listaMotos.push(new Moto(marca3, moto3, precio3));
listaMotos.push(new Moto(marca4, moto4, precio4));
listaMotos.push(new Moto(marca5, moto5, precio5));


function cotizacion(opcionMoto, opcionCuotas) {
    const opMoto = parseInt(opcionMoto);
    const opCuota = parseInt(opcionCuotas);
    console.log(opMoto);
    console.log(opCuota);
    // return opmoto + " " + opcuota;
    switch (opMoto) {
        case 1:
            mostrarCotizacion.innerHTML = `<br><h3>Cotizando: ${moto1}  -  Precio: $${precio1}  -  Número de cuotas: ${opcionCuotas}</h3><br>`;
            document.getElementById("resultadoCotizacion").append(mostrarCotizacion);

            const op1 = new Moto(marca1, moto1, precio1);
            console.log(op1.calcularCuota(opCuota));
            break;
        case 2:
            mostrarCotizacion.innerHTML = `<br><h3>Cotizando: ${moto2}  -  Precio: $${precio2}  -  Número de cuotas: ${opcionCuotas}</h3><br>`;
            document.getElementById("resultadoCotizacion").append(mostrarCotizacion);

            const op2 = new Moto(marca2, moto2, precio2);
            console.log(op2.calcularCuota(opCuota));
            break;
        case 3:
            mostrarCotizacion.innerHTML = `<br><h3>Cotizando: ${moto3}  -  Precio: $${precio3}  -  Número de cuotas: ${opcionCuotas}</h3><br>`;
            document.getElementById("resultadoCotizacion").append(mostrarCotizacion);

            const op3 = new Moto(marca3, moto3, precio3);
            console.log(op3.calcularCuota(opCuota));
            break;
        case 4:
            mostrarCotizacion.innerHTML = `<br><h3>Cotizando: ${moto4}  -  Precio: $${precio4}  -  Número de cuotas: ${opcionCuotas}</h3><br>`;
            document.getElementById("resultadoCotizacion").append(mostrarCotizacion);

            const op4 = new Moto(marca4, moto4, precio4);
            console.log(op4.calcularCuota(opCuota));
            break;
        case 5:
            mostrarCotizacion.innerHTML = `<br><h3>Cotizando: ${moto5}  -  Precio: $${precio5}  -  Número de cuotas: ${opcionCuotas}</h3><br>`;
            document.getElementById("resultadoCotizacion").append(mostrarCotizacion);

            const op5 = new Moto(marca5, moto5, precio5);
            console.log(op5.calcularCuota(opCuota));
            break;
        default:
            break;
    }
}


// SELECT MOTOS
const selectMotos = document.getElementById("selectMotos");
let i = 1;
//agregar lista de motos al select

listaMotos.forEach(el => {
    const opcionMotos = document.createElement("option");
    opcionMotos.value = i;
    opcionMotos.innerHTML = `${el.nombreMoto}`;
    selectMotos.appendChild(opcionMotos);
    i++;
})
//evento para saber que moto elige en el select
selectMotos.addEventListener("change", () => {
    console.log(selectMotos.value);
})


// SELECT CUOTAS
const selectCuotas = document.getElementById("selectCuotas");
//agregar lista de motos al select
for (let a = 1; a <= 12; a++) {
    const opcion = document.createElement("option");
    opcion.value = a;
    opcion.innerHTML = `${a}`;
    selectCuotas.append(opcion);
}
//evento para saber que moto elige en el select
selectCuotas.addEventListener("change", () => {
    console.log(selectCuotas.value);
})

const boton_cotizar = document.querySelector("#btn-enviar-cotizar");
mostrarCotizacion = document.createElement("p");

boton_cotizar.addEventListener("click", (e) => {
    e.preventDefault();
    if (selectMotos.value == 0) {
        alert("Por favor elegir una moto");
    } else if (selectCuotas.value == 0) {
        alert("Por favor elegir al menos una cuota.")
    } else {
        // mostrarCotizacion.innerHTML = ``;
        cotizacion(selectMotos.value, selectCuotas.value);
    }
})
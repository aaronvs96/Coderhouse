const mostrarCotizacion = document.createElement("p");
let nuevoTextoH = "";
nuevoTextoH = document.createElement("p");

//CLASE MOTO
class Moto {
    constructor(id, marcaMoto, nombreMoto, precioMoto) {
        this.id = id;
        this.marcaMoto = marcaMoto;
        this.nombreMoto = nombreMoto;
        this.precioMoto = precioMoto;
    }

    calcularCuota(cantidadCuota) {
        let interesCuota = 0.25;
        let valorCuotaInteres = 0;
        let valorCuota = this.precioMoto / cantidadCuota;
        let precioFinal = 0;

        if (cantidadCuota == 1) {
            nuevoTextoH.innerHTML = `Producto elegido: ${this.nombreMoto} -- Precio al contado: $${this.precioMoto}`;

        } else if (cantidadCuota >= 2) {
            nuevoTextoH.innerHTML = `Producto: ${this.nombreMoto} -- Precio al contado: $${this.precioMoto}`;
            nuevoTextoH.innerHTML += `<br>Resumen de cuotas: `;

            for (let i = 1; i <= cantidadCuota; i++) {
                valorCuotaInteres = Math.round(valorCuota + (interesCuota * valorCuota));
                nuevoTextoH.innerHTML += `<br>Cuota ${i}: $${valorCuotaInteres}`;
                precioFinal += valorCuotaInteres;
            }
            nuevoTextoH.innerHTML += `<br>-----------------------------`;
            nuevoTextoH.innerHTML += `<br>Interés por cuota: ${interesCuota * 100}%`;
            nuevoTextoH.innerHTML += `<br>El precio final de tu moto es de $${precioFinal}<br>`;

        }
        const resultadoCotizacion = document.getElementById("resultadoCotizacion");
        resultadoCotizacion.className = "mostrarCotizacion";
        resultadoCotizacion.append(nuevoTextoH);
        return resultadoCotizacion;
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


const listaMotos = [
    {
        "id": "001",
        "marca": "NEXUS",
        "nombreMoto": "Nexus 11V",
        "precio": 890
    },
    {
        "id": "002",
        "marca": "YAMAHA",
        "nombreMoto": "Yamaha NMAX",
        "precio": 16838
    },
    {
        "id": "003",
        "marca": "HONDA",
        "nombreMoto": "Honda X-Blade",
        "precio": 2685
    },
    {
        "id": "004",
        "marca": "HONDA",
        "nombreMoto": "Honda Navi 110",
        "precio": 1499
    },
    {
        "id": "005",
        "marca": "YAMAHA",
        "nombreMoto": "Yamaha Crypton T110",
        "precio": 6484
    }
];


const motosId = Object.fromEntries(listaMotos.map((moto) => {
    return [moto.id, new Moto(moto.id, moto.marca, moto.nombreMoto, moto.precio)];
}))
console.log(motosId);


function cotizacion(opMoto, opcionCuotas) {
    const moto = motosId[opMoto];
    const opCuota = parseInt(opcionCuotas);
    console.log(opMoto);
    console.log(opCuota);

    mostrarCotizacion.innerHTML = `<br><h3>Cotizando: ${moto.nombreMoto}  -  Precio: $${moto.precioMoto}  -  Número de cuotas: ${opcionCuotas}</h3><br>`;
    document.getElementById("resultadoCotizacion").append(mostrarCotizacion);

    moto.calcularCuota(opCuota);
}


// SELECT MOTOS
const selectMotos = document.getElementById("selectMotos");
for (const id in motosId) {
    const moto = motosId[id];
    const opcionMotos = document.createElement("option");
    opcionMotos.value = moto.id;
    opcionMotos.innerHTML = `${moto.nombreMoto}`;
    selectMotos.appendChild(opcionMotos);
}



// SELECT CUOTAS
const selectCuotas = document.getElementById("selectCuotas");
//agregar lista de cuotas al select
for (let a = 1; a <= 12; a++) {
    const opcion = document.createElement("option");
    opcion.value = a;
    opcion.innerHTML = `${a}`;
    selectCuotas.append(opcion);
}
//evento para saber que cuotas elige en el select
selectCuotas.addEventListener("change", () => {
    console.log(selectCuotas.value);
})

const boton_cotizar = document.querySelector("#btn-enviar-cotizar");
// mostrarCotizacion = document.createElement("p");

boton_cotizar.addEventListener("click", (e) => {
    e.preventDefault();
    if (!selectMotos.value) {
        alert("Por favor elegir una moto");
    } else if (selectCuotas.value == 0) {
        alert("Por favor elegir al menos una cuota.")
    } else {
        // mostrarCotizacion.innerHTML = ``;
        cotizacion(selectMotos.value, selectCuotas.value);
    }
})


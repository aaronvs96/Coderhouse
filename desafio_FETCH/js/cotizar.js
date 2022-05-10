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

        if (cantidadCuota > 0 && cantidadCuota == 1) {
            nuevoTextoH.innerHTML = `Producto elegido: ${this.nombreMoto} -- Precio al contado: $${this.precioMoto}`;

        } else if (cantidadCuota >= 2 && cantidadCuota <= 12) {
            nuevoTextoH.innerHTML = `Producto: ${this.nombreMoto} -- Precio al contado: $${this.precioMoto}`;
            // nuevoTextoH.innerHTML += `<br>Resumen de cuotas: `;

            valorCuotaInteres = Math.round(valorCuota + (interesCuota * valorCuota));
            nuevoTextoH.innerHTML += `<br>Valor de Cuota: $${valorCuotaInteres}`;
                for (let i = 1; i <= cantidadCuota; i++) {
                    precioFinal += valorCuotaInteres;
                }
            nuevoTextoH.innerHTML += `<br>-----------------------------`;
            nuevoTextoH.innerHTML += `<br>Interés por cuota: ${interesCuota * 100}%`;
            nuevoTextoH.innerHTML += `<br>El precio final de tu moto es de $${precioFinal}<br>`;

        }
        const resultadoCotizacion = document.getElementById("resultadoCotizacion");
        resultadoCotizacion.className = "mostrarCotizacion";
        document.getElementById("resultadoCotizacion")?.append(nuevoTextoH);
        return nuevoTextoH;
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
            document.getElementById("resultadoFiltro")?.append(textoFiltro);
        } else {
            alert("Por favor ingrese un valor.");
        }
        return texto;
    }
}


const listaMotos = [
    {
        "id": "001",
        "marca": "BAJAJ",
        "nombreMoto": "Bajaj Boxer-100 2021",
        "precio": 890,
        "img": "../img/listaMotos/bajaj-boxer-100-2021.png"
    },
    {
        "id": "002",
        "marca": "HONDA",
        "nombreMoto": "Honda cb125F Twister 2022",
        "precio": 1563,
        "img": "../img/listaMotos/honda-cb125f-twister-2022.png"
    },
    {
        "id": "003",
        "marca": "HONDA",
        "nombreMoto": "Honda Navi-110 2022",
        "precio": 7425,
        "img": "../img/listaMotos/honda-navi-110-2022.png"
    },
    {
        "id": "004",
        "marca": "HONDA",
        "nombreMoto": "Honda X-Blade 2021",
        "precio": 6633,
        "img": "../img/listaMotos/honda-x-blade-2021.png"
    },
    {
        "id": "005",
        "marca": "NEXUS",
        "nombreMoto": "Nexus 110a 2021",
        "precio": 7485,
        "img": "../img/listaMotos/nexus-110a-2021.png"
    },
    {
        "id": "006",
        "marca": "NEXUS",
        "nombreMoto": "Nexus 110v 2021",
        "precio": 2587,
        "img": "../img/listaMotos/nexus-110v-2021.png"
    },
    {
        "id": "007",
        "marca": "NEXUS",
        "nombreMoto": "Nexus 150dk 2021",
        "precio": 8112,
        "img": "../img/listaMotos/nexus-150dk-2021.png"
    },
    {
        "id": "008",
        "marca": "RONCO",
        "nombreMoto": "Ronco RC-110c 2021",
        "precio": 3250,
        "img": "../img/listaMotos/ronco-rc-110c-2021.png"
    },
    {
        "id": "009",
        "marca": "SSENDA",
        "nombreMoto": "Ssenda Finiti-150 Sport 2022",
        "precio": 4100,
        "img": "../img/listaMotos/ssenda-finiti-150-sport-2022.png"
    },
    {
        "id": "010",
        "marca": "SSENDA",
        "nombreMoto": "Ssenda Gol-120 2022",
        "precio": 1800,
        "img": "../img/listaMotos/ssenda-gol-125-2022.png"
    },
    {
        "id": "011",
        "marca": "YAMAHA",
        "nombreMoto": "Yamaha yb125 Chacarera 2021",
        "precio": 5200,
        "img": "../img/listaMotos/yamaha-yb125-chacarera-2021.png"
    },
    {
        "id": "012",
        "marca": "YAMAHA",
        "nombreMoto": "Yamaha ybr125z 2021",
        "precio": 3680,
        "img": "../img/listaMotos/yamaha-ybr125z-2021.png"
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

    mostrarCotizacion.innerHTML = `
        <br><h5>Cotizando: ${moto.nombreMoto}  -  Precio: $${moto.precioMoto}</h5>  
            <h5>Número de cuotas: ${opcionCuotas}</h5>
    `;
    document.getElementById("resultadoCotizacion")?.append(mostrarCotizacion);

    moto.calcularCuota(opCuota);
}


// SELECT MOTOS
const selectMotos = document.getElementById("selectMotos");
fetch("productos.json")
    .then(response => response.json())
    .then(result => {
        let productos = result;
        productos.forEach(producto => {
            selectMotos.innerHTML += `
                <option value="${producto.id}">${producto.nombreMoto}</option>
                `
        })
    })
    .catch(error => console.log(error))

selectMotos.addEventListener("change", () => {
    console.log(selectMotos.value)
})

// for (const id in motosId) {
//     const moto = motosId[id];
//     const opcionMotos = document.createElement("option");
//     opcionMotos.value = moto.id;
//     opcionMotos.innerHTML = `${moto.nombreMoto}`;
//     selectMotos?.appendChild(opcionMotos);
// }



// SELECT CUOTAS
const selectCuotas = document.getElementById("selectCuotas");
//agregar lista de cuotas al select
for (let a = 1; a <= 12; a++) {
    const opcion = document.createElement("option");
    opcion.value = a;
    opcion.innerHTML = `${a}`;
    selectCuotas?.append(opcion);
}
//evento para saber que cuotas elige en el select
selectCuotas.addEventListener("change", () => {
    console.log(selectCuotas.value);
})

const boton_cotizar = document.querySelector("#btn-enviar-cotizar");

boton_cotizar.addEventListener("click", (e) => {
    e.preventDefault();

    if (!selectMotos.value) {
        // alert("Por favor elegir una moto");
        swal({
            title: "Error",
            text: "Elige una moto",
            icon: "error",
        })
    } else if (selectCuotas.value == 0) {
        // alert("Por favor elegir al menos una cuota.")
        swal({
            title: "Error",
            text: "Elige la cantidad de cuotas",
            icon: "error",
        })
    } else {
        // mostrarCotizacion.innerHTML = ``;
        cotizacion(selectMotos.value, selectCuotas.value);
    }
})


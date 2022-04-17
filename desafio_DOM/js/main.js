//VARIABLES
marca1 = "NEXUS"; moto1 = "Nexus 11V"; precio1 = 890;
marca2 = "YAMAHA"; moto2 = "Yamaha NMAX"; precio2 = 16838;
marca3 = "HONDA"; moto3 = "Honda X-Blade"; precio3 = 2685;
marca4 = "HONDA"; moto4 = "Honda Navi 110"; precio4 = 1499;
marca5 = "YAMAHA"; moto5 = "Yamaha Crypton t110"; precio5 = 6484;

//CLASE MOTO
class Moto {
    constructor(marcaMoto, nombreMoto, precioMoto) {
        this.marcaMoto = marcaMoto;
        this.nombreMoto = nombreMoto;
        this.precioMoto = precioMoto;
    }

    calcularCuota(cantidadCuota) {
        let texto = "";
        let nuevoTextoH = "";
        if ((cantidadCuota > 0) && (cantidadCuota <= 36)) {
            let interesCuota = 0.25;
            let valorCuotaInteres = 0;
            let valorCuota = this.precioMoto / cantidadCuota;
            let precioFinal = 0;
            console.log("\n**************************************************")
            console.log("**************************************************")

            nuevoTextoH = document.createElement("p");

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
            document.getElementById("resultadoCotizacion").append(nuevoTextoH);

        } else if (cantidadCuota <= 0) {
            alert("Por favor ingresar un número de cuotas válido.")
        } else if (cantidadCuota > 36) {
            alert("No puede cotizar en más de 36 cuotas");
        }

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


function cotizar() {

    let i = 1;
    let bandera = true;
    let cuotas = 0;
    let cuotasH = "";
    console.log("\n*************** PAGINA DE COTIZACIÓN ***************");
    //MOSTRANDO LISTA DE MOTOS
    console.log("N°\tMARCA\tNOMBRE\t\t\tPRECIO");
    for (const el of listaMotos) {
        console.log(`${i}\t${el.marcaMoto}\t${el.nombreMoto}    $${el.precioMoto}\n`);
        i++;
    }

    //ITERADOR DE COTIZACION
    while (bandera) {
        cuotasH = document.createElement("p");
        cuotasH.innerHTML = `<br><h3>*************** PAGINA DE COTIZACIÓN ***************</h3>`;
        let opcion = parseInt(prompt(`Hola! Vamos a cotizar tu moto! ¿Qué moto deseas cotizar?\nIngresa el numero de orden o 6 para volver al menú principal:`));

        switch (opcion) {
            case 1:
                cuotas = parseInt(prompt(`Cotizando:\n${moto1}  -  Precio: $${precio1}\n¿Número de cuotas?:`));
                cuotasH.innerHTML += `<br><h3>Cotizando: ${moto1}  -  Precio: $${precio1}  -  Número de cuotas: ${cuotas}</h3><br>`;
                document.getElementById("resultadoCotizacion").append(cuotasH);

                const op1 = new Moto(marca1, moto1, precio1);
                console.log(op1.calcularCuota(cuotas));
                break;
            case 2:
                cuotas = parseInt(prompt(`Cotizando:\n${moto2}  -  Precio: $${precio2}\n¿Número de cuotas?:`));
                cuotasH.innerHTML += `<br><h3>Cotizando: ${moto2}  -  Precio: $${precio2}  -  Número de cuotas: ${cuotas}</h3><br>`;
                document.getElementById("resultadoCotizacion").append(cuotasH);

                const op2 = new Moto(marca2, moto2, precio2);
                console.log(op2.calcularCuota(cuotas));
                break;
            case 3:
                cuotas = parseInt(prompt(`Cotizando:\n${moto3}  -  Precio: $${precio3}\n¿Número de cuotas?:`));
                cuotasH.innerHTML += `<br><h3>Cotizando: ${moto3}  -  Precio: $${precio3}  -  Número de cuotas: ${cuotas}</h3><br>`;
                document.getElementById("resultadoCotizacion").append(cuotasH);

                const op3 = new Moto(marca3, moto3, precio3);
                console.log(op3.calcularCuota(cuotas));
                break;
            case 4:
                cuotas = parseInt(prompt(`Cotizando:\n${moto4}  -  Precio: $${precio4}\n¿Número de cuotas?:`));
                cuotasH.innerHTML += `<br><h3>Cotizando: ${moto4}  -  Precio: $${precio4}  -  Número de cuotas: ${cuotas}</h3><br>`;
                document.getElementById("resultadoCotizacion").append(cuotasH);

                const op4 = new Moto(marca4, moto4, precio4);
                console.log(op4.calcularCuota(cuotas));
                break;
            case 5:
                cuotas = parseInt(prompt(`Cotizando:\n${moto5}  -  Precio: $${precio5}\n¿Número de cuotas?:`));
                cuotasH.innerHTML += `<br><h3>Cotizando: ${moto5}  -  Precio: $${precio5}  -  Número de cuotas: ${cuotas}</h3><br>`;
                document.getElementById("resultadoCotizacion").append(cuotasH);

                const op5 = new Moto(marca5, moto5, precio5);
                console.log(op5.calcularCuota(cuotas));
                break;
            case 6:
                alert("Volviendo al menú principal...")
                bandera = false;
                break;
            default:
                alert("Por favor ingresa una opción del 1 al 6.");
                break;
        }

    }
}

let nombre = prompt("Ingresa tu nombre")
let mostrarBienvenido = document.createElement("h1");
mostrarBienvenido.innerHTML = `<h3>Bienvenido ${nombre}</h3>`;
document.getElementById("welcome").appendChild(mostrarBienvenido);

let i = 0
listaMotos.forEach(el => {
    let nodo = document.createElement("div");
    i += 1;
    nodo.innerHTML = `
        <h3>${i} - Marca: ${el.marcaMoto}</h3>
        <p>Nombre: ${el.nombreMoto}</p>
        <p>Precio: $${el.precioMoto}<br><br></p>
    `;
    document.getElementById("productos").appendChild(nodo);
    console.log(nodo);
})


let mostrarMenu = document.createElement("h2")
mostrarMenu.innerHTML = `<h5>Ingresa<br>1. Cotizar motos<br>2. Buscar por marca<br>3. Salir</h5>`;
document.getElementById("menu").append(mostrarMenu);

let band = true;
while (band) {

    let menu = parseInt(prompt("Bienvenido\n1. Cotizar motos\n2. Buscar por marca\n3. Salir").trim());

    switch (menu) {
        case 1:
            cotizar();
            break;
        case 2:
            let motoBuscar = prompt("Ingresa el nombre de la marca a buscar:").trim();
            const search = new Moto();
            console.log(search.filtroMarca(motoBuscar));
            break;
        case 3:
            alert("Saliendo del sistema.")
            console.log("========== FIN DEL PROGRAMA ===========")
            band = false;
            break;
        default:
            alert("Por favor ingresa una opción del 1 al 3.");
            break;
    }
}
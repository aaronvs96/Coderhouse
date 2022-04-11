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
        if ((cantidadCuota >0) && (cantidadCuota<=36)) {
            let interesCuota = 0.25;
            let valorCuotaInteres = 0;
            let valorCuota = this.precioMoto / cantidadCuota;
            let precioFinal = 0;
            console.log("\n**************************************************")
            console.log("**************************************************")
            if (cantidadCuota == 1) {
                texto = `Producto elegido: ${this.nombreMoto} -- Precio al contado: $${this.precioMoto}`;

            } else if (cantidadCuota >= 2) {
                texto += `Producto: ${this.nombreMoto} -- Precio al contado: $${this.precioMoto}`;
                texto += "\nResumen de cuotas:";

                for (let i = 1; i <= cantidadCuota; i++) {
                    valorCuotaInteres = Math.round(valorCuota + (interesCuota * valorCuota));
                    texto += `\nCuota ${i}: $${valorCuotaInteres}`;
                    precioFinal += valorCuotaInteres;

                }

                texto += "\n-----------------------------";
                texto += `\nInterés por cuota: ${interesCuota * 100}%`;
                texto += `\nEl precio final de tu moto es de $${precioFinal}`;

            }
        } else if(cantidadCuota<=0){
            alert("Por favor ingresar un número de cuotas válido.")
        }else if(cantidadCuota>36){
            alert("No puede cotizar en más de 36 cuotas");
        }
        return texto;

    }

    filtroMarca(valorBuscado) {
        let texto = "";
        if (valorBuscado != "") {
            const resultado = listaMotos.filter((el) => el.marcaMoto.includes(valorBuscado.toUpperCase()));

            console.log("\n*************** PAGINA DE FILTROS ***************\nBuscando por 'marca'.")
            console.log(`Elemento buscado: '${valorBuscado}'`)
            console.log(`${resultado.length} resultados encontrados.`)
            for (const el of resultado) {
                texto += `Marca: ${el.marcaMoto}\nNombre: ${el.nombreMoto}\nPrecio: $${el.precioMoto}\n\n`;
            }

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
    console.log("\n*************** PAGINA DE COTIZACIÓN ***************");
    //MOSTRANDO LISTA DE MOTOS
    console.log("N°\tMARCA\tNOMBRE\t\t\tPRECIO");
    for (const el of listaMotos) {
        console.log(`${i}\t${el.marcaMoto}\t${el.nombreMoto}    $${el.precioMoto}\n`);
        i++;
    }

    //ITERADOR DE COTIZACION
    while (bandera) {
        let opcion = parseInt(prompt(`Hola! Vamos a cotizar tu moto! ¿Qué moto deseas cotizar?\nIngresa el numero de orden o 6 para volver al menú principal:`));
        switch (opcion) {
            case 1:
                cuotas = parseInt(prompt(`Cotizando:\n${moto1}  -  Precio: $${precio1}\n¿Número de cuotas?:`));
                const op1 = new Moto(marca1, moto1, precio1);
                console.log(op1.calcularCuota(cuotas));
                break;
            case 2:
                cuotas = parseInt(prompt(`Cotizando:\n${moto2}  -  Precio: $${precio2}\n¿Número de cuotas?:`));
                const op2 = new Moto(marca2, moto2, precio2);
                console.log(op2.calcularCuota(cuotas));
                break;
            case 3:
                cuotas = parseInt(prompt(`Cotizando:\n${moto3}  -  Precio: $${precio3}\n¿Número de cuotas?:`));
                const op3 = new Moto(marca3, moto3, precio3);
                console.log(op3.calcularCuota(cuotas));
                break;
            case 4:
                cuotas = parseInt(prompt(`Cotizando:\n${moto4}  -  Precio: $${precio4}\n¿Número de cuotas?:`));
                const op4 = new Moto(marca4, moto4, precio4);
                console.log(op4.calcularCuota(cuotas));
                break;
            case 5:
                cuotas = parseInt(prompt(`Cotizando:\n${moto5}  -  Precio: $${precio5}\n¿Número de cuotas?:`));
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
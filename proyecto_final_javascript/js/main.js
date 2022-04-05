function elegir() {

    moto1 = "Nexus 11V"; precio1 = 890;
    moto2 = "Ronco RC110B"; precio2 = 931;
    moto3 = "Ssenda ECO FINITI 150"; precio3 = 1180;
    moto4 = "Honda Navi 110"; precio4 = 1499;
    moto5 = "Lifan LF125T-2EV"; precio5 = 1217;

    let bandera = true;

    while (bandera) {
        let opcion = parseInt(prompt(`Hola! Vamos a cotizar tu moto!\n1. ${moto1}\n2. ${moto2}\n3. ${moto3}\n4. ${moto4}\n5. ${moto5}\n6. SALIR\n\n¿Qué moto deseas cotizar?`));

        switch (opcion) {
            case 1:
                cuotas = parseInt(prompt(`Cotizando:\n${moto1}  -  Precio: $${precio1}\n¿Número de cuotas?:`));
                calculoCuota(cuotas, precio1, moto1);
                break;
            case 2:
                cuotas = parseInt(prompt(`Cotizando:\n${moto2}  -  Precio: $${precio2}\n¿Número de cuotas?:`));
                calculoCuota(cuotas, precio2, moto2);
                break;
            case 3:
                cuotas = parseInt(prompt(`Cotizando:\n${moto3}  -  Precio: $${precio3}\n¿Número de cuotas?:`));
                calculoCuota(cuotas, precio3, moto3);
                break;
            case 4:
                cuotas = parseInt(prompt(`Cotizando:\n${moto4}  -  Precio: $${precio4}\n¿Número de cuotas?:`));
                calculoCuota(cuotas, precio4, moto4);
                break;
            case 5:
                cuotas = parseInt(prompt(`Cotizando:\n${moto5}  -  Precio: $${precio5}\n¿Número de cuotas?:`));
                calculoCuota(cuotas, precio5, moto5);
                break;
            case 6:
                alert("Saliendo del sistema.")
                bandera = false;
                break;
            default:
                alert("Por favor ingresa una opción del 1 al 6.");
                break;
        }

    }

}

function calculoCuota(cantidadCuota, precioMoto, nombreMoto) {
    interesCuota = 0.25;
    let texto;
    let valorCuotaInteres = 0;
    let valorCuota = precioMoto / cantidadCuota;
    let precioFinal = 0;
    console.log("**************************************************")
    if (cantidadCuota == 1) {
        console.log(`Producto: ${nombreMoto} -- Precio al contado: $${precioMoto}`);

    } else if (cantidadCuota >= 2) {
        console.log(`Producto: ${nombreMoto} -- Precio al contado: $${precioMoto}`);
        console.log("Resumen de cuotas:");

        for (let i = 1; i <= cantidadCuota; i++) {
            valorCuotaInteres = Math.round(valorCuota + (interesCuota * valorCuota));
            texto = `Cuota ${i}: $${valorCuotaInteres}`;
            precioFinal += valorCuotaInteres;
            console.log(texto);
        }
        console.log("-----------------------------------------------")
        console.log(`Interés por cuota: ${interesCuota * 100}%`)
        console.log(`El precio final de tu moto es de $${precioFinal}`);
    }
}

elegir();
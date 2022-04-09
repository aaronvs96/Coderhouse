function elegir(){
    //VARIABLES
    marca1="Nexus"; moto1 = "Nexus 11V"; precio1 = 890;
    marca2="Ronco"; moto2 = "Ronco RC110B"; precio2 = 931;
    marca3="Ssenda"; moto3 = "Ssenda ECO FINITI 150"; precio3 = 1180;
    marca4="Honda"; moto4 = "Honda Navi 110"; precio4 = 1499;
    marca5="Lifan"; moto5 = "Lifan LF125T-2EV"; precio5 = 1217;
    let i=1;
    let bandera=true;

    //CLASE MOTO
    class Moto{
        constructor(marcaMoto, nombreMoto, precioMoto){
            this.marcaMoto = marcaMoto;
            this.nombreMoto = nombreMoto;
            this.precioMoto = precioMoto;
        }        
    }
    
    //ARRAY
    listaMotos = [];

    //AGREGANDO AL ARRAY
    listaMotos.push(new Moto(marca1, moto1, precio1));
    listaMotos.push(new Moto(marca2, moto2, precio2));
    listaMotos.push(new Moto(marca3, moto3, precio3));
    listaMotos.push(new Moto(marca4, moto4, precio4));
    listaMotos.push(new Moto(marca5, moto5, precio5));

    //MOSTRANDO LISTA DE MOTOS
    console.log("N°\tMARCA\tNOMBRE\t\t\tPRECIO");
    for(const el of listaMotos){    
        console.log(`${i}\t${el.marcaMoto}\t${el.nombreMoto}    $${el.precioMoto}\n`);
        i++;
    }

    //ITERADOR DE COTIZACION
    while(bandera){
        let opcion = parseInt(prompt(`Hola! Vamos a cotizar tu moto! ¿Qué moto deseas cotizar?\nIngresa el numero de orden o 6 para salir:`));
        switch (opcion) {
            case 1:
                cuotas = parseInt(prompt(`Cotizando:\n${moto1}  -  Precio: $${precio1}\n¿Número de cuotas?:`));
                const op1 = new CalculoCuota(cuotas, precio1, moto1);
                console.log(op1.calcular());
                break;
            case 2:
                cuotas = parseInt(prompt(`Cotizando:\n${moto2}  -  Precio: $${precio2}\n¿Número de cuotas?:`));
                const op2 = new CalculoCuota(cuotas, precio2, moto2);
                console.log(op2.calcular());
                break;
            case 3:
                cuotas = parseInt(prompt(`Cotizando:\n${moto3}  -  Precio: $${precio3}\n¿Número de cuotas?:`));
                const op3 = new CalculoCuota(cuotas, precio3, moto3);
                console.log(op3.calcular());
                break;
            case 4:
                cuotas = parseInt(prompt(`Cotizando:\n${moto4}  -  Precio: $${precio4}\n¿Número de cuotas?:`));
                const op4 = new CalculoCuota(cuotas, precio4, moto4);
                console.log(op4.calcular());
                break;
            case 5:
                cuotas = parseInt(prompt(`Cotizando:\n${moto5}  -  Precio: $${precio5}\n¿Número de cuotas?:`));
                const op5 = new CalculoCuota(cuotas, precio5, moto5);
                console.log(op5.calcular());
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

//CALCULAR CUOTAS
class CalculoCuota {
    constructor(cantidadCuota, precioMoto, nombreMoto){
        this.cantidadCuota = cantidadCuota;
        this.precioMoto = precioMoto;
        this.nombreMoto = nombreMoto;
    }
    calcular(){
        let interesCuota = 0.25;
        let texto="";
        let valorCuotaInteres = 0;
        let valorCuota = this.precioMoto / this.cantidadCuota;
        let precioFinal = 0;
        console.log("\n**************************************************")
        console.log("**************************************************")
        if (this.cantidadCuota == 1) {
            texto = `Producto elegido: ${this.nombreMoto} -- Precio al contado: $${this.precioMoto}`;
            
        } else if (this.cantidadCuota >= 2) {
            texto+=`Producto: ${this.nombreMoto} -- Precio al contado: $${this.precioMoto}`;
            texto+="\nResumen de cuotas:";
    
            for (let i = 1; i <= this.cantidadCuota; i++) {
                valorCuotaInteres = Math.round(valorCuota + (interesCuota * valorCuota));
                texto += `\nCuota ${i}: $${valorCuotaInteres}`;
                precioFinal += valorCuotaInteres;
                
            }
            
            texto+="\n-----------------------------";
            texto+=`\nInterés por cuota: ${interesCuota * 100}%`;
            texto+=`\nEl precio final de tu moto es de $${precioFinal}`;
            
        }
        return texto;
    }

}

elegir();
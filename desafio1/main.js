// let tope=parseInt(prompt("Hasta donde imprimir?: "))

// for(let i=1; i<=tope; i++){
//     /*if (i%2==0) {
//         console.log(i+" es par")
//     }else{
//         console.log(i + " es impar")
//     }*/

//     // if (i==5) {
//     //     continue;
//     // }
//     // console.log(i)
    
// }


// let numero=parseInt(prompt("Ingresar numero: "))

// for (let i = 1; i < numero; i++) {
//     console.log(numero*i)
    
// }



// let pass=1234;
// let dato = parseInt(prompt("Cual es la contraseña: "));
// let intentos=3;

// while ((dato!=pass) && (intentos>0)){    
//     alert(`la contraseña es errónea, te quedan ${intentos} intentos`);    
//     dato = parseInt(prompt("Cual es la contraseña: "));
//     intentos--;
// }


// let animal = prompt("qué animal te gusta? ")

// switch(animal){
//     case "perro":
//         alert("elegiste la opcion "+animal)
//         break;
//     case "gato":
//         alert("elegiste la opcion "+animal)
//         break;
//     default:
//         alert("no se qué animal sea ese!")
//         break;
// }


/* HACER UNA CALCULADORA 
1. pedir al usuario dos numeros
2.

*/



// let band=1;

// while(band==1){
//     let num1 = parseInt(prompt("Ingresa primer numero: "));
//     let num2 = parseInt(prompt("Ingresa segundo numero: "));
//     let ope = prompt("Qué operacion deseas hacer? +, -, x, /");
//     switch(ope){
//         case "+":
//             console.log("La suma es "+(num1+num2));
//             break;
//         case "-":
//             console.log("La resta es "+(num1-num2));
//             break;
//         case "x":
//             console.log("El producto es "+(num1*num2));
//             break;
//         case "/":
//             console.log("La división es "+(num1/num2));
//             break;
//         default:
//             alert("No conozco esa operación.");
//             break;
//     }
//     band = parseInt(prompt("Desea continuar? si=1, no=0"));
//     if (band!=1) {
//         console.log("Fin del programa.")
//     }
// }
let contador=0;
let aprobado=0;
let suspendido=0;

console.log("Ingreso de notas:")

for (let i = 1; i <= 10; i++) {
    nota = parseInt(prompt(`Ingresa la nota ${i}:`));
    
    if ((nota>=0) && (nota<=10)) {
        if (nota >= 6) {
            aprobado++;
        }else{
            suspendido++;
        }
        contador++;
        console.log(`Alumno ${i} - Nota: ${nota}`)
    }else{
        alert("Error, nota inválida!")
        i--;
    }
}
console.log("---------------------------------")
console.log(`Total de notas ingresadas: ${contador}`);
console.log(`Hay ${aprobado} alumnos aprobados`);
console.log(`Hay ${suspendido} alumnos suspendidos`);
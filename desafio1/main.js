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

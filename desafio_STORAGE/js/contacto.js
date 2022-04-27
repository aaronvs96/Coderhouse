const datos_completados = document.getElementById("datos_completados");

const texto_nombres = document.querySelector("#texto_nombres");
const texto_apellidos = document.querySelector("#texto_apellidos");
const texto_email = document.querySelector("#texto_email");
const texto_consulta = document.querySelector("#texto_consulta");

const boton_contacto = document.querySelector("#btn-enviar-contacto");

const mostrarDatos = document.createElement("p");

boton_contacto.addEventListener("click", (e) => {
    e.preventDefault();
    if ((texto_nombres.value == "") || (texto_apellidos.value == "") || (texto_email.value == "") || (texto_consulta.value == "")) {
        alert("Tienes campos vacíos. Completa por favor.")
    } else {
        
        // console.log(`valor ingresado: ${texto.value.trim()}`)
        //cambiamos el nombre de la clase para mostrar los datos ingresados
        datos_completados.className = "datos_completados";
        
        mostrarDatos.innerHTML = `
                Datos enviados:<br><br>
                Nombres: ${texto_nombres.value}<br>
                Apellidos: ${texto_apellidos.value}<br>
                Email: ${texto_email.value}<br>
                Contenido: ${texto_consulta.value}`;
        document.getElementById("datos_completados").append(mostrarDatos);
        texto_nombres.value="";
        texto_apellidos.value="";
        texto_email.value = "";
        texto_consulta.value="";
    }
});
const nombre= prompt("Ingresa tu nombre:");
const apellido= prompt("Ingresa tu apellido:");
const edad= prompt("Ingresa tu edad:");
const lugarnacimiento= prompt("Ingresa tu lugar de nacimiento:");
const fecha= prompt("Ingresa tu lugar de nacimiento:");
const comidafavorita= prompt("Ingresa tu comida favorita:");
const carrera= prompt("Ingresa tu carrera:");
const diafavorito= prompt("Ingresa tu dia favorito de la semana:")

const lista=document.createElement("ul");

const agregardato=(etiqueta, valor) =>{
    const elementolista = document.createElement("li");
    elementolista.innerHTML= `<strong>${etiqueta}:</strong> ${valor};`
    lista.appendChild(elementolista);

};
 agregardato("Nombre", `${nombre} ${apellido}`);
 agregardato("Edad", edad);
 agregardato("Lugar de nacimiento", lugarnacimiento);
 agregardato("Fecha de nacimiento", fecha);
 agregardato("Comida Favorita", comidafavorita);
 agregardato("Carrera", carrera);
 agregardato("Dia favorito de la semana", diafavorito);

 const resultadoDiv = document.createElement("div");
 resultadoDiv.appendChild(lista);

 document.body.appendChild(resultadoDiv);
// alert("hola mundo")
// ejercicio 1
// Crea un archivo index.html con cuatro elementos <p>como arriba:

// Selecciona el primer párrafo con document.querySelector(tagname).

const paragraph1 = document.getElementsByTagName("p");
console.log(paragraph1);

// Selecciona todos los párrafos, uno a uno, usando document.querySelector('#id').
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");

console.log(p1,p2,p3,p4);

// Selecciona todos los párrafos como nodeList usando document.querySelectorAll(tagname).
const allparagrap = document.querySelectorAll("p"); 
console.log(allparagrap);

console.log(`---------------------------------------------------------------------------`);

// Itera por cada párrafo y muestra por consola el texto de cada uno de ellos.
for(i=0; i<allparagrap.length; i++){
    let show = allparagrap[i];
    console.log(show);
}

// Cambia el contenido del cuarto párrafo a Forth Paragraph.
const newp4 = document.getElementById("p4");
newp4.innerHTML = "Forth Paragraph";



//----***** Ejercicio 2 *******-------->
// Cambia el estilo de cada párrafo usando JavaScript uno de los siguientes párrafos (color, backgroundColor, border, font-size, font-family).

const paragr = document.querySelector("#p1");
paragr.style.color = "blue";
paragr.style.backgroundColor = "green"

const paragr2 = document.querySelector("#p2");
paragr2.style.backgroundColor = "yellow";

const paragr3 = document.querySelector("#p3");
paragr3.style.fontFamily = "Arial";
paragr3.style.fontWeight = "bold"

const paragr4 = document.querySelector("#p4");
paragr4.style.fontSize = "20px"

const paragrborder = document.querySelector("#p4");
paragrborder.style.border = "solid orange"

console.log(`----------------------------------------------------------------`);

// Selecciona todos los párrafos, itera por cada uno de ellos y dale al 1º y 3º un color green, y al 2º y 4º red.
// Cambia el texto, id y class de cada párrafo.

const allparafos = document.querySelectorAll("p")
console.log(allparafos);

for(i=0; i<allparafos.length; i++){
    allparafos[0].style.backgroundColor = "green"
    allparafos[1].style.backgroundColor = "red"
    allparafos[2].style.backgroundColor = "green"
    allparafos[3].style.backgroundColor = "red"

}
console.log('-------chanhe text----------------------------------');

const textTwo = document.getElementById("p2");
textTwo.id = "nuevaID"
console.log(textTwo);
console.log('-------changeId----------------------------');

const textOne = document.getElementById("p1");
textOne.innerText = "Este es mi nuevo texto"
console.log(textOne);    

console.log('-------Exercice 3----------------------------------');      

// Ejercicio 3
// Desarrolla la siguiente mini-aplicación usando el HTML que tienes más abajo, y dando todos los estilos y funcionalidades con JS.

// El color del texto con el año cambia cada segundo.
const now = new Date();
console.log(now);
const secunds = now.getSeconds();
console.log(`Este cambia cada segundo: ${secunds}`);
console.log('------------***-------------------**---------');

// El ejercicio consiste en crear, usando exclusivamente JavaScript, 100 botones e introducirlos en la section.

// Estos botones tendrán como texto su número: el primer botón tendrá 1, el segundo 2, etc.
// El primer botón tendrá un color de fondo rojo , el segundo azul , el tercero rojo , el cuarto azul , etc.
// Una vez que haya creado los botones, da a cada quinto botón un color de texto verde .

console.log('------*******--funcion arcoIris-----****');
// La tarea consiste en seleccionar todos los span, iterar sobre ellos y asignarle cada uno de los colores del array tal que las letras formen el arcoiris.
// ---------------------------------------------------------------------------------
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    const allSpan = document.querySelectorAll("span");
    console.log(allSpan);

    allSpan.forEach((span, index) => {
    span.style.color = colors[index];
    console.log(span);
    });






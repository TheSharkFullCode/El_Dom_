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
const textOne = document.getElementById("p1");
textOne.innerText = "Este es mi nuevo texto"
console.log(textOne);    

const textTwo = document.getElementById("#p2");
textTwo.innerHTML = "nuevaID"

       
// Ejercicio 3
// Desarrolla la siguiente mini-aplicación usando el HTML que tienes más abajo, y dando todos los estilos y funcionalidades con JS.

// const changecolorh1 = document.querySelector("h1");
// changecolorh1.style.color = "yellow"

// El color del texto con el año cambia cada segundo.

// La fecha y su color de fondo cambian cada segundo (la hora se actualiza, funcionando como reloj).

// Los desafíos completados tienen color de fondo verde.

// Los desafíos en curso tienen color de fondo amarillo.
// Los desafíos sin empezar tienen color de fondo rojo.

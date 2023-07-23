// alert("hola mundo")
// Ejercicio 3
// Desarrolla la siguiente mini-aplicación usando el HTML que tienes más abajo, y dando todos los estilos y funcionalidades con JS.


// las colecciones que devuelve queryselector son iterables, con idice base cero.
const colorTexth1 = document.querySelector("h1");
colorTexth1.style.color = "red";

const colorText = document.querySelectorAll("h1");
let suma="";

for (let i = 0; i < colorText.length; i++) {
     suma += colorText[i].style.backgroundolor ="blue" 
//   colorText[i].style.color = "red";
}
console.log('-----------funcion------');

setInterval(changecolorh1,2000); 
const h1Element = document.querySelector("h1");
console.log(h1Element);
function changecolorh1() {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    const color = `rgb(${r},${g},${b})`
    h1Element.style.color = `${color}`;

}

const h2changeSize = document.querySelector("h2")
h2changeSize.style.fontSize = "13px"
h2changeSize.style.color = "grey"
h2changeSize.style.textDecoration = "underline "
console.log(h2changeSize);

// El color del texto con el año cambia cada segundo.
const now = new Date();
console.log(now);
//------- ******------variable---(seconds)--------------
const secunds = now.getSeconds();
//------- ******------variable---(seconds)--------------
console.log(`los segundos trascurridos: ${secunds}`);

const day = now.getUTCDate()
const years = now.getFullYear()
const hours = now.getHours()
const month = now.getMonth()
const minutes = now.getMinutes()
console.warn(day,month,years,hours,minutes );
console.log(`Jul ${day} /0${month}/${hours}: ${minutes}`);


// const dates2 = document.querySelector(".calendary")
const dates =document.querySelector(".calendary")
const tag = document.createElement("span")
tag.innerText = `Jul ${day}/0${month}/${years}: ${hours}:${minutes}`
dates.appendChild(tag)
console.log(tag);
console.warn(dates);
console.log('*****function change Color *****');

function changecolor() {
    setInterval(() => {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
  
      const color = `rgb(${r},${g},${b})`;
      const h1Element = document.querySelector("h1");
      const spanElement = document.querySelector("span");
  
      h1Element.style.color = color;
      spanElement.style.backgroundColor = color;
    }, 2000);
  }  
  changecolor();

console.log('se ejecuta a la perfeccion');
// La fecha y su color de fondo cambian cada segundo (la hora se actualiza, funcionando como reloj).

// Los desafíos completados tienen color de fondo verde.

const listOrder = document.querySelector("li")
listOrder.style.backgroundColor = "green"

const tagLi2 = document.querySelector("#tagLi2")
// Los desafíos en curso tienen color de fondo amarillo.
tagLi2.style.backgroundColor = "yellow"
// Los desafíos sin empezar tienen color de fondo rojo.


console.log('*****-------------*******');

const tagLiAll = document.querySelectorAll(".tagLiAll");

tagLiAll.forEach((node) => {
  node.style.backgroundColor = "red";

});
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
let count = 0;
const section = document.querySelector(".btones")

for (let i = 1; i < 101; i++) {

const createButton = document.createElement("button");
createButton.innerHTML = `${i}`;
//se le asigna al buton el numero de iteacion:como su contenido en html
section.appendChild(createButton);

  if (i % 5 === 0) {
    count++;
    createButton.style.color = "orange";
  } else if (i % 2 === 0) {
    createButton.style.backgroundColor = "#E74C3C";
  } else {
    createButton.style.backgroundColor = "#3498DB";
  }
}
// ------------------------------------------------------->
// ------------------------------------------------------->

function changecolorBotons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button, index) => {
    setInterval(() => {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);

      const color = `rgb(${r},${g},${b})`;

      buttons.forEach((btn) => {
        btn.style.backgroundColor = ""; // Restablecer el color de fondo original
      });

      button.style.backgroundColor = color;
    }, (index + 1) * 2000); 
  });
}

changecolorBotons();





























const arrayletras = ["oscar","david","pedro","dani","javi"]
const max = 5
const min= 0 ;

const nrandom = Math.random()*(max+min)-min;
console.log(nrandom);
nentero = parseInt(nrandom)
console.log(nentero);

for(i=0; i<arrayletras.length;i++){
   const letra = arrayletras[nentero];
   console.log(letra);
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// const changecolorh1 = document.querySelector("h1");
// changecolorh1.style.color = "yellow"


// La fecha y su color de fondo cambian cada segundo (la hora se actualiza, funcionando como reloj).

// Los desafíos completados tienen color de fondo verde.

// Los desafíos en curso tienen color de fondo amarillo.
// Los desafíos sin empezar tienen color de fondo rojo.


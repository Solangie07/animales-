// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "https://th.bing.com/th/id/OIP.wxhy0ugWhu8RIm1gYl_voQHaE7?w=242&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCAastAYEqOnrlpcqV-A-T3BoUmeCCmnRDg&s",
"https://static.vecteezy.com/system/resources/thumbnails/067/960/074/small/majestic-arctic-wolf-standing-in-snowy-landscape-photo.jpg",
 "https://media.admagazine.com/photos/65d52f225cbe5d11597bf45d/4:3/w_3000,h_2250,c_limit/Colibr%C3%AD%20y%20leyenda%20maya.jpg",
"https://humanidades.com/wp-content/uploads/2017/03/serpiente-azul-1-e1564541777289-800x400.jpg",
];

const titulos = [
  "LEÓN",
  "MARIPOSA",
  "LOBO",
  "COLIBRÍ",
  "SERPIENTE",
];

const frases = [
  "El león representa corage y liderazgo.",
  "La mariposa significa renovación y transformación.",
  "El lobo representa lealtad y trabajo en equipo ",
  "El colibrí representa resiliencia y alegria ",
  "la serpiente representa tentación y renovación",
];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");
const saludo = document.getElementById("saludo"); 

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3, 4, 5

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();

let nombre = prompt ("¿como te llamas?") ;
//alert(`hola, ${nombre}`);


saludo.innerText = "Hola, " + nombre + ". Descubre cual es tu animal espiritual"

generarPrediccion
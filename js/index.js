// OBTENCION DE RECETAS ATRAVEZ DE FETCH (API) Y BOTON CARGAR MAS
let numero = 10;
database();
function database() {
  fetch("https://dummyjson.com/recipes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let section = document.querySelector(".padre-recetas");
      let character = "";
      section.innerHTML = character;
      for (let i = 0; i < numero; i++) {
        character = `<article class="receta">
        <img class="imagen-receta" src=${data.recipes[i].image} alt='imagen-receta'>
        <p class = "titulo"> ${data.recipes[i].name}</p>
        <p class = "dificultad">Dificultad: ${data.recipes[i].difficulty}</p>
        <a href="./receta.html?id=${data.recipes[i].id}" class="detalle">Detalle</a>
        </article>`;
        section.innerHTML += character;
      }
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
}
let boton = document.querySelector(".mas");
boton.addEventListener("click", function () {
  numero += 10;
  database();
});

// FORMULARIO BUSCADOR
let formulario = document.querySelector("#formulario-buscador");
let busqueda = document.querySelector("#buscador");
let feedback = document.querySelector(".feedback");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  let valida = true;
  if (busqueda.value == "") {
    feedback.innerHTML = `<p class="error">El campo esta vacío</p>`;
    feedback.style.display = "block";
    valida = false;
  } else if (busqueda.value.length < 3) {
    feedback.innerHTML = `<p class="error">La búsqueda debe tener al menos 3 caracteres</p>`;
    feedback.style.display = "block";
    valida = false;
  }
  if (valida) {
    this.submit();
  }
});

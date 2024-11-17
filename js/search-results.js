let section = document.querySelector(".padre-recetas");
let querysting = location.search;
let queryStringobj = new URLSearchParams(querysting);
let buscaformulario = queryStringobj.get("search");
let titulob = document.querySelector("#busqueda-titulo");
let url = `https://dummyjson.com/recipes/search?q=${buscaformulario}`;
let caja = document.querySelector(".interactivo-ser");
let frame = document.querySelector(".frame2");
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    if (data.recipes.length == 0) {
      titulob.innerHTML = `No se encontraron recetas con el término ${buscaformulario}`;
      caja.innerHTML += `<a class="link-ser" href="./index.html"><h3 href="" class="mas">Voler al Home</h3></a>`;
      caja.style.display = "block";
      frame.style.display = "none";
    } else {
      titulob.innerHTML = `Resultados de la búsqueda: ${buscaformulario}`;
      let character = "";
      for (let i = 0; i < data.recipes.length; i++) {
        character = `<article class="receta">
        <img class="imagen-receta" src=${data.recipes[i].image} alt='imagen-receta'>
        <p class = "titulo"> ${data.recipes[i].name}</p>
        <a href="./receta.html?id=${data.recipes[i].id}" class="detalle">Detalle</a>
        </article>`;
        section.innerHTML += character;
      }
    }
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
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

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
// OBTENCION DE TAG INDIVIDUAL ATRAVEZ DE QUERYSTRING Y ENDPOINT DE LA API
let querysting = location.search;
let queryStringobj = new URLSearchParams(querysting);
let tagcategory = queryStringobj.get("tag");
let url = `https://dummyjson.com/recipes/tag/${tagcategory}`;
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let articulo = "";
    let titulo = document.querySelector("#titulo1destacado");
    let seccion = document.querySelector(".padre-recetas-detalle");
    for (let i = 0; i < data.recipes.length; i++) {
      articulo += `<article class="receta">
        <img class="imagen-receta" src=${data.recipes[i].image} alt='imagen-receta'>
        <p class = "titulo"> ${data.recipes[i].name}</p>
        <p class = "dificultad">Dificultad: ${data.recipes[i].difficulty}</p>
        <a href="./receta.html?id=${data.recipes[i].id}" class="detalle">Detalle</a>
        </article>`;
    }
    console.log(data);
    seccion.innerHTML = articulo;
    titulo.innerHTML = `${tagcategory}`;
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });

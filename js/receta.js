// OBTENCION DE RECETAS ATRAVEZ DE QUERYSTRING Y ENDPOINT DE LA API
let querysting = location.search;
let queryStringobj = new URLSearchParams(querysting);
let idusuario = queryStringobj.get("id");
let url = `https://dummyjson.com/recipes/${idusuario}`;
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let instrucciones = "";
    let secparatag = "";
    let sectiontag = document.querySelector("#idtag");
    let titulo = document.querySelector("#titulo1destacado");
    let seccion = document.querySelector(".padre-recetas-detalle");
    for (let i = 0; i < data.instructions.length; i++) {
      instrucciones += `<li class = "parrafod">${
        "Step: " + i + " " + data.instructions[i]
      }</li>`;
      seccion.innerHTML = `<article class="receta-detalle">
        <h3 class="titulo4">Instrucciones de preparación</h3>
        <ul class="padres-li-recetas">${instrucciones}</ul>
        <p class="parrafod">Tiempo de cocción: ${data.cookTimeMinutes} minutos</p>
        </article>
        
        <article class="receta-detalle">
        <img class="imagen-receta" src="${data.image}" alt="Imagen-Receta">
        </article>`;
    }
    for (let b = 0; b < data.tags.length; b++) {
      secparatag += `<article class="tags">
      <a href="./category.html?tag=${data.tags[b]}" class="tagtext">${data.tags[b]}</a>
      </article>`;
    }
    console.log(data);
    titulo.innerText += ` ${data.name}`;
    sectiontag.innerHTML = secparatag;
  })
  .catch(function (error) {
    console.log("Error: " + error);
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

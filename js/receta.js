let querysting = location.search;
let queryStringobj = new URLSearchParams(querysting);
let idusuario = queryStringobj.get("id");
url = `https://dummyjson.com/recipes/${idusuario}`;
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    instrucciones = "";
    let titulo = document.querySelector("#titulo1destacado");
    let seccion = document.querySelector(".padre-recetas-detalle");
    for (let i = 0; i < data.instructions.length; i++) {
      instrucciones += `<li class = "parrafod">${
        'Step: '+ i +' ' + data.instructions[i]
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
    console.log(data);
    titulo.innerText += ` ${data.name}`;
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });

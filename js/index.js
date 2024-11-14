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
      console.log(data.recipes);
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
}
let boton = document.querySelector(".mas");
boton.addEventListener("click", function () {
  numero += 10;
  console.log(numero);
  database();
});

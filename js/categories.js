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
// FORMULARIO BUSCADOR
fetch("https://dummyjson.com/recipes/tags")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let section = document.querySelector(".padre-tags");
    let character = "";
    for (let i = 0; i < data.length; i++) {
      character += `<article class="tags">
        <a href="./category.html?tag=${data[i]}" class="tagtext">${data[i]}</a>
        </article>`;
      section.innerHTML = character;
    }
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });

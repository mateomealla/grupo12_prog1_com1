let formulario = document.querySelector("#formulario-buscador");
let busqueda = document.querySelector("#buscador");
let feedback = document.querySelector(".feedback");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  let valida = true;
  if (busqueda.value == "") {
    feedback.innerHTML = <p class="error">El campo esta vacío</p>;
    feedback.style.display = "block";
    valida = false;
  } else if (busqueda.value.length < 3) {
    feedback.innerHTML = <p class="error">La búsqueda debe tener al menos 3 caracteres</p>;
    feedback.style.display = "block";
    valida = false;
  }
  if (valida) {
    this.submit();
  }
});
let login = document.querySelector("#formulario-login")
let mail = document.querySelector("#mailf");
let password = document.querySelector("#passwordf");
login.addEventListener("submit", function (event) {
  event.preventDefault();
  let validaf = true;
  if (mail.value == "") {
    alert("Por favor complete el campo email")
    validaf = false;
  } if (password.value == "") {
    alert("Por favor complete el campo contraseña")
    validaf = false;
  }
  if (validaf) {
    this.submit();
  }
});

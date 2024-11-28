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
    feedback.innerHTML =`<p class="error">La búsqueda debe tener al menos 3 caracteres</p>`;
    feedback.style.display = "block";
    valida = false;
  }
  if (valida) {
    this.submit();
  }
});
// FORMULARIO VALIDACION
let register = document.querySelector("#formulario-register");
let mail = document.querySelector("#mailr");
let password = document.querySelector("#passwordr");
let feedbackr1 = document.querySelector(".feedbackr1");
let feedbackr2 = document.querySelector(".feedbackr2");
register.addEventListener("submit", function (event) {
  event.preventDefault();
  let validar = true;
  if (mail.value == "") {
    feedbackr1.innerHTML = `<p class="error">Por favor complete el campo</p>`;
    feedbackr1.style.display = "block";
    validar = false;
  }
  if (password.value == "") {
    feedbackr2.innerHTML = `<p class="error">Por favor complete el campo</p>`;
    feedbackr2.style.display = "block";
    validar = false;
  }
  if (validar) {
    this.submit();
  }
});

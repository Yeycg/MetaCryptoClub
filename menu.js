const btnMenuMobile = document.querySelector('.btn-mobile-menu');
const menuMobile = document.querySelector('.menuMobile');

btnMenuMobile.addEventListener('click', toggleMobilemenu) ;

function toggleMobilemenu() {
    menuMobile.classList.toggle ('inactive');
}





const cardToggles = document.querySelectorAll(".card-toggle");

cardToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const cardBody = toggle.parentNode.parentNode.nextElementSibling;
    cardBody.classList.toggle("hidden");
    toggle.textContent = cardBody.classList.contains("hidden") ? "Ver más" : "Ver menos";
  });
});


// Seleccionar todos los botones "Ver más"
const toggleButtons = document.querySelectorAll(".card-toggle");

// Recorrer los botones y agregar el evento de clic
toggleButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Obtener el contenedor de la tarjeta actual
    const cardContainer = button.closest(".cardContainer");
    // Obtener el elemento "card-body" de la tarjeta actual
    const cardBody = cardContainer.querySelector(".card-body");

    // Agregar o quitar la clase "visible" del elemento "card-body"
    cardBody.classList.toggle("visible");

    // Cambiar el texto del botón según si se muestra o no el contenido
    if (cardBody.classList.contains("visible")) {
      button.textContent = "Ver menos";
    } else {
      button.textContent = "Ver más";
    }
  });
});
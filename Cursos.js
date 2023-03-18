//Seccion contenido del curso 

const toggleButtons = document.querySelectorAll('.card-toggle');

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const cardBody = button.parentNode.parentNode.nextElementSibling;
    if (cardBody.classList.contains('hidden')) {
      cardBody.classList.remove('hidden');
      button.innerHTML = 'Ver menos';
    } else {
      cardBody.classList.add('hidden');
      button.innerHTML = 'Ver más';
    }
  });
});




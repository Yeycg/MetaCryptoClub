
// Abrir Modal

const modalAdd = document.querySelector('#modalAdd');
const openModal = () => {
    modalAdd.style.display = 'flex' ;
}

const closeModal = () => {
    modalAdd.style.display = 'none';
}

modalAdd.onclick = (event) => {
    if (event.target == modalAdd) {
        closeModal();
    }
}

// Obtener los elementos del DOM
const checkbox = document.getElementById('checkbox');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

// Deshabilitar los botones por defecto
button1.disabled = true;
button2.disabled = true;

// Agregar un event listener a la casilla de verificación
checkbox.addEventListener('change', function() {
    if (this.checked) {
        // Si la casilla está marcada, habilitar los botones
        button1.disabled = false;
        button2.disabled = false;
    } else {
        // Si la casilla no está marcada, deshabilitar los botones y quitar la clase "active"
        button1.disabled = true;
        button2.disabled = true;
        button1.classList.remove('active');
        button2.classList.remove('active');
    }
});

// Agregar un event listener a los botones
button1.addEventListener('click', function(event) {
    if (!checkbox.checked) {
        // Si la casilla no está marcada, prevenir la acción por defecto y mostrar una alerta
        event.preventDefault();
        alert('Debes aceptar los términos y condiciones antes de continuar.');
    } else {
        // Si la casilla está marcada, añadir la clase "active" al botón
        button1.classList.add('active');
    }
});

button2.addEventListener('click', function(event) {
    if (!checkbox.checked) {
        // Si la casilla no está marcada, prevenir la acción por defecto y mostrar una alerta
        event.preventDefault();
        alert('Debes aceptar los términos y condiciones antes de continuar.');
    } else {
        // Si la casilla está marcada, añadir la clase "active" al botón
        button2.classList.add('active');
    }
});


button1.addEventListener('click', function(event) {
  if (!checkbox.checked) {
    // Si la casilla no está marcada, mostrar una alerta
    alert('Debes aceptar los términos y condiciones antes de continuar.');
    event.preventDefault(); // Evita que el enlace se abra
  } else {
    // Si la casilla está marcada, hacer algo
    // ...
  }
});

button2.addEventListener('click', function(event) {
  if (!checkbox.checked) {
    // Si la casilla no está marcada, mostrar una alerta
    alert('Debes aceptar los términos y condiciones antes de continuar.');
    event.preventDefault(); // Evita que el enlace se abra
  } else {
    // Si la casilla está marcada, hacer algo
    // ...
  }
});

// Agregar un event listener al elemento <a> dentro de cada botón
button1.querySelector('a').addEventListener('click', function(e) {
  if (!checkbox.checked) {
    // Evitar que el link redireccione si la casilla no está marcada
    e.preventDefault();
    alert('Debes aceptar los términos y condiciones antes de continuar.');
  }
});

button2.querySelector('a').addEventListener('click', function(e) {
  if (!checkbox.checked) {
    // Evitar que el link redireccione si la casilla no está marcada
    e.preventDefault();
    alert('Debes aceptar los términos y condiciones antes de continuar.');
  }
});

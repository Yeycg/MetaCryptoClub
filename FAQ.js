

 const bloque = document.querySelectorAll('.bloque');
const FAQtitulo = document.querySelectorAll('.FAQ-titulo');

//cuando haga click en cada una de las etiquetas de los titulos
 // quitar la clase activa de todos los bloques
 // vamos a a;adir la clase activo al bloque con la posicion del titulo

FAQtitulo.forEach((cadaTitulo, i) => {
  FAQtitulo[i].addEventListener('click', () => {
    if (!bloque[i].classList.contains('activo')) { // si el bloque no está activo, entonces lo activamos
      bloque.forEach((cadaBloque, j) => {
        bloque[j].classList.remove('activo');
      });
      bloque[i].classList.add('activo');
    }
  });
});

const bloques = document.querySelectorAll('.bloque');
const titulosFAQ = document.querySelectorAll('.FAQ-titulo');

let bloqueActivo = null;

titulosFAQ.forEach((titulo, i) => {
  titulo.addEventListener('click', () => {
    if (bloqueActivo === bloques[i]) {
      // Si el bloque seleccionado ya está activo, lo desactivamos
      bloques[i].classList.remove('activo');
      bloqueActivo = null;
    } else {
      // Primero, desactivamos el bloque activo si lo hay
      if (bloqueActivo !== null) {
        bloqueActivo.classList.remove('activo');
      }
      // Luego, activamos el nuevo bloque seleccionado
      bloques[i].classList.add('activo');
      bloqueActivo = bloques[i];
    }
  });
});
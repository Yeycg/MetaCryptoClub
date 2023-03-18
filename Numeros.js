// Función para animar los números
function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = range / (duration / 50); // 50 es el intervalo de tiempo en milisegundos
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
      current += increment;
      obj.innerHTML = Math.round(current);
      if (current >= end) {
        clearInterval(timer);
        obj.innerHTML = end;
      }
    }, 50);
  }
  
  // Función para determinar si la sección está visible en la pantalla
  function isScrolledIntoView(elem) {
    var rect = elem.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
  
    // Solo es visible si está dentro de la ventana visible y no está detrás de ella
    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }
  
  // Función que se ejecutará cada vez que se haga scroll
  function checkScroll() {
    var cursosElem = document.getElementById("num-cursos");
    var modulosElem = document.getElementById("num-modulos");
    var leccionesElem = document.getElementById("num-lecciones");
    var horasElem = document.getElementById("num-horas");
    var seguidoresElem = document.getElementById("num-seguidores");
  
    // Comprueba si cada sección está visible en la pantalla y si aún no ha sido animada
    if (isScrolledIntoView(cursosElem) && cursosElem.innerHTML == "0") {
      animateValue("num-cursos", 0, 5, 5000);
    }
    if (isScrolledIntoView(modulosElem) && modulosElem.innerHTML == "0") {
      animateValue("num-modulos", 0, 21, 5000);
    }
    if (isScrolledIntoView(leccionesElem) && leccionesElem.innerHTML == "0") {
      animateValue("num-lecciones", 0, 125, 5000);
    }
    if (isScrolledIntoView(horasElem) && horasElem.innerHTML == "0") {
      animateValue("num-horas", 0, 25, 5000);
    }
    if (isScrolledIntoView(seguidoresElem) && seguidoresElem.innerHTML == "0") {
      animateValue("num-seguidores", 0, 100000, 5000);
    }
  }
  
  // Registra la función checkScroll para el evento scroll
  window.addEventListener("scroll", checkScroll);
  
function animateValue(elem, start, end, duration) {
  let range = end - start;
  let current = start;
  let increment = range / (duration / 3);
  let startTime = null;
  const updateAnimation = (timeStamp) => {
    if (!startTime) startTime = timeStamp;
    const elapsed = timeStamp - startTime;
    current = start + increment * elapsed;
    if (current >= end) {
      current = end;
      cancelAnimationFrame(animationId);
    }
    elem.innerHTML = Math.round(current);
    animationId = requestAnimationFrame(updateAnimation);
  };
  let animationId = requestAnimationFrame(updateAnimation);
}

function isScrolledIntoView(elem) {
  const rect = elem.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;
  const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

function checkScroll() {
  const cursosElem = document.getElementById("num-cursos");
  const modulosElem = document.getElementById("num-modulos");
  const leccionesElem = document.getElementById("num-lecciones");
  const horasElem = document.getElementById("num-horas");
  const seguidoresElem = document.getElementById("num-seguidores");

  if (isScrolledIntoView(cursosElem) && cursosElem.innerHTML === "0") {
    animateValue(cursosElem, 0, 5, 2000);
  }
  if (isScrolledIntoView(modulosElem) && modulosElem.innerHTML === "0") {
    animateValue(modulosElem, 0, 21, 3000);
  }
  if (isScrolledIntoView(leccionesElem) && leccionesElem.innerHTML === "0") {
    animateValue(leccionesElem, 0, 125, 4000);
  }
  if (isScrolledIntoView(horasElem) && horasElem.innerHTML === "0") {
    animateValue(horasElem, 0, 25, 5000);
  }
  if (isScrolledIntoView(seguidoresElem) && seguidoresElem.innerHTML === "0") {
    animateValue(seguidoresElem, 0, 100000, 6000);
  }
}

window.addEventListener("scroll", checkScroll);

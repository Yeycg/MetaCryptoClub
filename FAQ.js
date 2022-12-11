const bloque = document.querySelectorAll('.bloque');
const FAQtitulo = document.querySelectorAll('.FAQ-titulo');

//cuando haga click en cada una de las etiquetas de los titulos
 // quitar la clase activa de todos los cloques
 // vamos a a;adir la clase activo al bloque con la posicion del titulo

 FAQtitulo.forEach( ( cadaTitulo , i) => {
    FAQtitulo[i].addEventListener('click', ()=>{

        bloque.forEach ( (cadaBloque , i)=>{
            bloque[i].classList.toggle('activo') // si colocamo . remove en vez de toggle se abrira uno por uno 
        })

        //bloque[i].classList.add('activo') lo desactive, con esta linea podemos abrir uno por uno pero siempre el ultimo quedara activado
    })

 })
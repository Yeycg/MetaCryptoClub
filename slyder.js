(function(){
    const sliders = [...document.querySelectorAll('.sliderBody')];
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    let value ;

    arrowNext.addEventListener('click', ()=>changePosition(1));
    arrowBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change) {
        const currentElement = Number(document.querySelector('.sliderBodyShow').dataset.id);

        value = currentElement;
        value+= change;

        if (value === 0 || value == sliders.length+1) {
                value = value === 0 ? sliders.length : 1;
            }
            sliders[currentElement -1].classList.toggle('sliderBodyShow');
            sliders[value-1].classList.toggle('sliderBodyShow');
    }
}
)()
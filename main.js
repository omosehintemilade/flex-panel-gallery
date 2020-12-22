let panels = document.querySelectorAll('.panel')

panels.forEach((parameter) => parameter.addEventListener('click', toggleOpen));
panels.forEach((parameter) => parameter.addEventListener('transitionend', toggleActive));
// panels.forEach((parameter) => parameter.addEventListener('trnsitionend', console.log('hello'));

function toggleOpen() {
    this.classList.toggle('open')

}

function toggleActive(param) {
    // console.log(param.propertyName);
    if (param.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}
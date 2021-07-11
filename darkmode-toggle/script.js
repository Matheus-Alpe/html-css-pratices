const checkbox = document.querySelector('input[name=theme]');
const htmlElement = document.documentElement;

//primeira vez que carregar, se tiver ativo, ja define para dark
if(checkbox.checked) htmlElement.setAttribute('data-theme', 'dark');

//eventos de mudar o toggle
checkbox.addEventListener('change', function() {
    if(this.checked) {
        transition();
        htmlElement.setAttribute('data-theme', 'dark');
    } else {
        transition();
        htmlElement.setAttribute('data-theme', 'light');
    }
});

//transição 
function transition() {
    htmlElement.classList.add('transition');
    window.setTimeout(() => {
        htmlElement.classList.remove('transition');
    }, 1000);
}       
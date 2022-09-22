//Animação do toast função feita apenas para se comportar com as duas ao mesmo tempo
setTimeout(function () {
    const toast = document.querySelectorAll('.toast');
    for (element in toast) {
        toast[element].animate([
            { transform: 'tranlateY(0px)' },
            { transform: 'translateX(100px)' },
            { opacity: 0 }
        ], {
            duration: 3000,
            iteration: 1
        }
        )
    }
}, 1000);

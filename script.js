let toggle = document.querySelector('.toggle'); //On recupere les informations de la div toggle
let body = document.querySelector('body'); //On recupere les informations du body

toggle.addEventListener('click', function () { //J'attends un clic sur le toggle
    body.classList.toggle('nav-open'); //Lorsque un clic est effectuer sur le toggle, on ajoute (ou enleve) la classe nav-open sur le body
});
let paginaSobre = document.getElementById('pagina-sobre');
let paginaContato = document.getElementById('pagina-contato');
let btnSobre = document.getElementById('sobre');
let btnContato = document.getElementById('contato');

btnSobre.addEventListener('click', function() {
    paginaSobre.style.display = 'flex';
    paginaContato.style.display = 'none';
});

btnContato.addEventListener('click', function() {
    paginaSobre.style.display = 'none';
    paginaContato.style.display = 'flex';
});
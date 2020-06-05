function ler(id) {

    if( !document.getElementById('historia').classList.contains('hide') ) {
        document.getElementById('historia').classList.toggle('hide')
    }
    if( !document.getElementById('arquitetura').classList.contains('hide') ) {
        document.getElementById('arquitetura').classList.toggle('hide')
    }
    if( !document.getElementById('estruturas').classList.contains('hide') ) {
        document.getElementById('estruturas').classList.toggle('hide')
    }
    if( !document.getElementById('cultural').classList.contains('hide') ) {
        document.getElementById('cultural').classList.toggle('hide')
    }
    if( !document.getElementById('horario').classList.contains('hide') ) {
        document.getElementById('horario').classList.toggle('hide')
    }
    if( !document.getElementById('preco').classList.contains('hide') ) {
        document.getElementById('preco').classList.toggle('hide')
    }
    if( !document.getElementById('contato').classList.contains('hide') ) {
        document.getElementById('contato').classList.toggle('hide')
    }


    let show = document.getElementById(id);
    show.classList.toggle('hide')
}
function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    } else {
        alert('Elemento não encontrado');
        console.log('Elemento não encontrado o ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeyup = function (evento){
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
        if (evento.code === 'Backspace'){
            tecla.classList.remove('ativa');
        }
    }

    tecla.onkeydown = function (){
        tecla.classList.remove('ativa');
        
    }
}
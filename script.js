function trocarImagem(imagem) {
    var imagemAmpliada = document.getElementById('imagemAmpliada');
    imagemAmpliada.src = imagem.src;
    imagemAmpliada.classList.remove('ampliada');
}

function ampliarImagem(imagem) {
    if (imagem.classList.contains('ampliada')) {
        imagem.classList.remove('ampliada');
    } else {
        imagem.classList.add('ampliada');
    }
}

var indicesImagens = {
    'imagens-carrossel': 0,
    'imagens-secundarias': 0
};

function moverCarrossel(direcao, carrosselId) {
    var imagens = document.querySelectorAll('#' + carrosselId + ' img');
    indicesImagens[carrosselId] += direcao;
    if (indicesImagens[carrosselId] < 0) {
        indicesImagens[carrosselId] = imagens.length - 1;
    } else if (indicesImagens[carrosselId] >= imagens.length) {
        indicesImagens[carrosselId] = 0;
    }
    for (var i = 0; i < imagens.length; i++) {
        imagens[i].classList.remove('active');
    }
    imagens[indicesImagens[carrosselId]].classList.add('active');
}

function mudarImagemPrincipal(src) {
    document.getElementById('imagemPrincipal').src = src;
}

function favoritarCarro(nomeCarro) {
    document.querySelector('.favorito').classList.toggle('favoritado');
}

window.onload = function() {
    var imagens = document.querySelectorAll('.galeria-imagens img');
    imagens[0].classList.add('active');
}




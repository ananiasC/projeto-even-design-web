function mudaEstadoImagem() {
  var display1 = document.getElementById('imagens_esquerda').style.display;
  var display2 = document.getElementById('imagens_direita').style.display;

  if(display1 == "none"){
    document.getElementById('imagens_esquerda').style.display = 'block';
    document.getElementById('imagensbotaoicon').src = '../imagens/menos.png';
  }
  else{
    document.getElementById('imagens_esquerda').style.display = 'none';
    document.getElementById('imagensbotaoicon').src = '../imagens/mais.png';
  }

  if(display2 == "none"){
    document.getElementById('imagens_direita').style.display = 'block';
  }
  else{
    document.getElementById('imagens_direita').style.display = 'none';
  }
}

function mudaEstadoVideo() {
  var display = document.getElementById('videos').style.display;
  var altura = document.querySelector(".minhaDiv");

  if(display == "none"){
    document.getElementById('videos').style.display = 'block';
    document.getElementById('videosbotaoicon').src = '../imagens/menos.png';
  }
  else{
    document.getElementById('videos').style.display = 'none';
    document.getElementById('videosbotaoicon').src = '../imagens/mais.png';
  }
}

function mudaEstadoImagemGaleria() {
  var display1 = document.getElementById('imagens_esquerda').style.display;
  var display2 = document.getElementById('imagens_direita').style.display;

  if(display1 == "none"){
    document.getElementById('imagens_esquerda').style.display = 'block';
    document.getElementById('imagensbotaoicon').src = 'imagens/menos.png';
  }
  else{
    document.getElementById('imagens_esquerda').style.display = 'none';
    document.getElementById('imagensbotaoicon').src = 'imagens/mais.png';
  }

  if(display2 == "none"){
    document.getElementById('imagens_direita').style.display = 'block';
  }
  else{
    document.getElementById('imagens_direita').style.display = 'none';
  }
}

function mudaEstadoVideoGaleria() {
  var display = document.getElementById('videos').style.display;
  var altura = document.querySelector(".minhaDiv");

  if(display == "none"){
    document.getElementById('videos').style.display = 'block';
    document.getElementById('videosbotaoicon').src = 'imagens/menos.png';
  }
  else{
    document.getElementById('videos').style.display = 'none';
    document.getElementById('videosbotaoicon').src = 'imagens/mais.png';
  }
}

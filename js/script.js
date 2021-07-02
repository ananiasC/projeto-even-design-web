var contador = 1;

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
    document.getElementById('botaomais').style.display = 'block';
    document.getElementById('imagensbotaoicon').src = 'imagens/menos.png';
  }
  else{
    document.getElementById('imagens_esquerda').style.display = 'none';
    document.getElementById('botaomais').style.display = 'none';
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

  if(display == "none"){
    document.getElementById('videos').style.display = 'block';
    document.getElementById('videosbotaoicon').src = 'imagens/menos.png';
  }
  else{
    document.getElementById('videos').style.display = 'none';
    document.getElementById('videosbotaoicon').src = 'imagens/mais.png';
  }
}

function maisFotosGaleria(){

    if(contador == 1){
      document.getElementById('fotosmais').style.display = 'block';
      document.getElementById('fotosmais6').style.display = 'block';
      contador = contador + 1;
    }
    else if(contador == 2){
      document.getElementById('fotosmais2').style.display = 'block';
      document.getElementById('fotosmais7').style.display = 'block';
      contador = contador + 1;
    }
    else if(contador == 3){
      document.getElementById('fotosmais3').style.display = 'block';
      document.getElementById('fotosmais8').style.display = 'block';
      contador = contador + 1;
    }
    else if(contador == 4){
      document.getElementById('fotosmais4').style.display = 'block';
      document.getElementById('fotosmais9').style.display = 'block';
      contador = contador + 1;
    }
    else if(contador == 5){
      document.getElementById('fotosmais5').style.display = 'block';
      document.getElementById('fotosmais10').style.display = 'block';
      document.getElementById('botaomais').disabled = true;
      contador = contador + 1;
    }
}

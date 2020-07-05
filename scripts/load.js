function preload() {
    imagemGameOver = loadImage('imagens/cenario/gameover.png');
    imagemTelaInicial = loadImage('imagens/cenario/telaInicial2.png');
    fontTelaInicial = loadFont('imagens/assets/fontJogo.ttf');
    imagemCoracao = loadImage('imagens/assets/coracao.png');
  
  
    imagemBackground = loadImage('imagens/cenario/cemiterio/background.png');
    imagemSky = loadImage('imagens/cenario/cemiterio/sky.png');
    imagemCemitery = loadImage('imagens/cenario/cemiterio/cemitery.png');
    imagemCross = loadImage('imagens/cenario/cemiterio/cross.png');
    imagemGrass = loadImage('imagens/cenario/cemiterio/grass.png');
   
  
    imagemPersonagem = loadImage('imagens/personagem/zombieV06.png');
    imagemInimigo = loadImage('imagens/inimigos/montros3.png');
    imagemAlien = loadImage('imagens/inimigos/alien.png');
    imagemPassaro = loadImage('imagens/inimigos/bird2.png');
    somDoJogo = loadSound('sons/trilha_jogo.mp3');
    somPulo = loadSound('sons/somPulo.mp3');

    fita = loadJSON('fita/fita.json');
    
  }
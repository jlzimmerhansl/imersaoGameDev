function setup() 
{
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  somDoJogo.loop();
  telaInicial = new TelaInicial();
  jogo = new Jogo();
  cenas = {
    jogo,
    telaInicial
  };
  jogo.setup();
  button = new Button('Iniciar', width / 2, height / 2);
}

function keyPressed()
{
  jogo.keyPressed(key);
}


function draw() 
{
  cenas[cenaAtual].draw();
}

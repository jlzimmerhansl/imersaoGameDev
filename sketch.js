let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let personagem;

function preload() {
  imagemCenario = loadImage('imagens/cenario/scenario.png');
  imagemPersonagem = loadImage('imagens/personagem/player.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 20);
  personagem = new Personagem(imagemPersonagem, 270, 220);
  frameRate(8); // frames / segundo
  somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
  personagem.anima();
}

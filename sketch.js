let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemGameOver;
let imagemSky;
let imagemBackground;
let imagemCemitery;
let imagemCross;
let imagemFence;
let imagemGrass;
let imagemGrave;
let imagemHands;
let imagemMoon;

let cenario;
let somDoJogo;
let somPulo;
let personagem;
let inimigo;
let gameOver;
let background;
let sky;
let cemitery;
let cross;
let fence;
let grass;
let grave;
let hands;
let moon;

const matrizPersonagem = criaMatriz(230, 230, 3, 3);
const matrizInimigo = criaMatriz(180, 100, 3, 2);


function preload() {
  //imagemCenario = loadImage('imagens/cenario/scenario.png');
  imagemGameOver = loadImage('imagens/cenario/gameover.png');
  imagemBackground = loadImage('imagens/cenario/cemiterio/background.png');
  imagemSky = loadImage('imagens/cenario/cemiterio/sky.png');
  imagemCemitery = loadImage('imagens/cenario/cemiterio/cemitery.png');
  imagemCross = loadImage('imagens/cenario/cemiterio/cross.png');
  imagemFence = loadImage('imagens/cenario/cemiterio/fence.png');
  imagemGrass = loadImage('imagens/cenario/cemiterio/grass.png');
  imagemGrave = loadImage('imagens/cenario/cemiterio/grave.png');
  imagemHands = loadImage('imagens/cenario/cemiterio/hands.png');
  imagemMoon = loadImage('imagens/cenario/cemiterio/moon.png');

  imagemPersonagem = loadImage('imagens/personagem/zombieV06.png');
  imagemInimigo = loadImage('imagens/inimigos/montros3.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  background = new Cenario(imagemBackground, 10);
  sky = new Cenario(imagemSky, 9);
  cemitery = new Cenario(imagemCemitery, 6.75);
  cross = new Cenario(imagemCross, 5.75);
  grass = new Cenario(imagemGrass, 4.5);

  
  personagem = new Personagem(matrizPersonagem,imagemPersonagem, 0, 230, 230, 230, 230);
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 110, 70, 180, 100);

  gameOver = new Cenario(imagemGameOver, 0);
  
  frameRate(40);
  somDoJogo.loop();
}

function keyPressed(){
  if(key === 'ArrowUp' && personagem.numeroPulos < 2){
    personagem.pulaPersonagem();
    somPulo.play();
  }
}

function draw() {
  background.exibe();
  background.move();
  sky.exibe();
  sky.move();
  cemitery.exibe();
  cemitery.move();
  cross.exibe();
  cross.move();
  grass.exibe();
  grass.move();
  inimigo.exibe();
  inimigo.moveInimigo();
  personagem.exibe();
  personagem.aplicaGravidade();
  
  if(personagem.colisao(inimigo)){
    noLoop();
    gameOver.exibe(); 
  }
}

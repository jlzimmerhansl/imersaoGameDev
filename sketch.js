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
let imagemTrol;
let imagemInimigoVoador;

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
let trol;
let inimigoVoador;
let pontuacao;

const matrizPersonagem = criaMatriz(230, 230, 3, 3);
const matrizInimigo = criaMatriz(180, 100, 3, 2);

const matrizTrol = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]

const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

const inimigos = [];

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
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemTrol = loadImage('imagens/inimigos/troll.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pontuacao = new Pontuacao();
  background = new Cenario(imagemBackground, 10);
  sky = new Cenario(imagemSky, 9);
  cemitery = new Cenario(imagemCemitery, 6.75);
  cross = new Cenario(imagemCross, 5.75);
  grass = new Cenario(imagemGrass, 4.5);

  
  personagem = new Personagem(matrizPersonagem,imagemPersonagem, 0, 30, 230, 230, 230, 230);
  const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 110, 70, 180, 100, 10, 500);
  const trol = new Inimigo(matrizTrol, imagemTrol, width, 0, 200, 200, 400, 400, 10, 200);
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 1500);
  
  inimigos.push(inimigo);
  inimigos.push(trol);
  inimigos.push(inimigoVoador);

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


  personagem.exibe();
  personagem.aplicaGravidade();
  
  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.moveInimigo();

    if(personagem.colisao(inimigo)){
      console.log('colidiu');
      //noLoop();
      //gameOver.exibe(); 
    }
  });

  pontuacao.exibePontos();
  pontuacao.adicionarPonto();
}

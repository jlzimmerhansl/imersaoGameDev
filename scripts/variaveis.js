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
let imagemAlien;
let imagemPassaro;
let imagemTelaInicial;
let fontTelaInicial;
let imagemCoracao;

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
let pontuacao;
let alient;
let passaro;
let start = false;
let jogo;
let cenaAtual = 'telaInicial';
let cenas;
let telaInicial;
let button;
let life;
let fita;

const matrizPersonagem = criaMatriz(230, 230, 3, 3);
const matrizInimigo = criaMatriz(180, 100, 3, 2);
const matrizPassaro = criaMatriz(200, 150, 5, 3);
const matrizAlien = criaMatriz(140,130, 4, 3);


const inimigos = [];
const cenarios = [];
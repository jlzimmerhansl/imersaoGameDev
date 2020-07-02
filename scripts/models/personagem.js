class Personagem extends Animacao
{
  constructor(matriz,imagem, posicaoImagemX, alturaImagem, larguraImagem, larguraSprite, alturaSprite)
  {
    super(matriz, imagem, posicaoImagemX, alturaImagem, larguraImagem, larguraSprite, alturaSprite);
   
    this.frameAtual = 0; 
    this.jump = -30; 
    this.gravidade = 3;  
    this.velocidadePulo = 0;
    this.posicaoYInicial = height - this.alturaImagem;
    this.posicaoY = this.posicaoYInicial;
    this.numeroPulos = 0;
  }

  pulaPersonagem(){
    this.velocidadePulo = this.jump;
    this.numeroPulos++;
  }

  aplicaGravidade(){
    this.posicaoY += this.velocidadePulo;
    this.velocidadePulo += this.gravidade;

    if(this.posicaoY > this.posicaoYInicial){
      this.posicaoY = this.posicaoYInicial;
      this.numeroPulos = 0;
    }
  }

  colisao(inimigo){
    

    const precisao = .8;

    return collideRectRect(
      this.posicaoImagemX, 
      this.posicaoY, 
      this.larguraImagem * precisao, 
      this.alturaImagem * precisao,
      inimigo.posicaoImagemX,
      inimigo.posicaoY,
      inimigo.larguraImagem * precisao,
      inimigo.alturaImagem * precisao
    );

  }
}
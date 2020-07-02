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
  }

  pulaPersonagem(){
    this.velocidadePulo = this.jump;
  }

  aplicaGravidade(){
    this.posicaoY += this.velocidadePulo;
    this.velocidadePulo += this.gravidade;

    if(this.posicaoY > this.posicaoYInicial){
      this.posicaoY = this.posicaoYInicial;
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
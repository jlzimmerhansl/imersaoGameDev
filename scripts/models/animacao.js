class Animacao{
    constructor(matriz, imagem, posicaoImagemX, variacaoY, larguraImagem, alturaImagem, larguraSprite, alturaSprite){
        this.matriz = matriz;
        this.imagem = imagem;
        this.larguraImagem = larguraImagem;
        this.alturaImagem = alturaImagem;
        this.posicaoImagemX = posicaoImagemX;
        this.variacaoY = variacaoY;
        this.posicaoY = height - this.alturaImagem - this.variacaoY;
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;

        this.frameAtual = 0;
    }

    exibe()
    {
      image(
          this.imagem, 
          this.posicaoImagemX, 
          this.posicaoY, 
          this.larguraImagem, 
          this.alturaImagem, 
          this.matriz[this.frameAtual][0], 
          this.matriz[this.frameAtual][1], 
          this.larguraSprite, 
          this.alturaSprite
        );
      
      this.anima();
    }

    anima()
    {
        this.frameAtual++;
    
        if (this.frameAtual >= this.matriz.length - 1) {
            this.frameAtual = 0;
        }
    }
}
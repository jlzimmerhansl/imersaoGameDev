class Animacao{
    constructor(matriz, imagem, posicaoImagemX, largura, altura, larguraSprite, alturaSprite){
        this.matriz = matriz;
        this.imagem = imagem;
        this.largura = largura;
        this.altura = altura;
        this.posicaoImagemX = posicaoImagemX;
        this.posicaoY = height - this.altura;
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
          this.largura, 
          this.altura, 
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
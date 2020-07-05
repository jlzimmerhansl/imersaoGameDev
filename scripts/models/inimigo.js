class Inimigo extends Animacao{
    constructor(matriz, imagem, posicaoImagemX,variacaoY, larguraImagem, alturaImagem, larguraSprite, alturaSprite, velocidade){
        super(matriz, imagem, posicaoImagemX, variacaoY, larguraImagem, alturaImagem, larguraSprite, alturaSprite);

        this.velocidade = velocidade;
        this.posicaoImagemX = width;
    }

    moveInimigo(){

        this.posicaoImagemX = this.posicaoImagemX - this.velocidade;
    }

    reaparece()
    {
        this.posicaoImagemX = width;
    }
}
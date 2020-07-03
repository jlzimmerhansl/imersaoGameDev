class Inimigo extends Animacao{
    constructor(matriz, imagem, posicaoImagemX,variacaoY, larguraImagem, alturaImagem, larguraSprite, alturaSprite, velocidade, delay){
        super(matriz, imagem, posicaoImagemX, variacaoY, larguraImagem, alturaImagem, larguraSprite, alturaSprite);

        this.velocidade = velocidade;
        this.delay = delay;
        this.posicaoImagemX = width + this.delay;
    }

    moveInimigo(){

        this.posicaoImagemX = this.posicaoImagemX - this.velocidade;
        if(this.posicaoImagemX < -this.larguraImagem - this.delay){
            this.posicaoImagemX = width;
        }
    }
}
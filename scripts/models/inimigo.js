class Inimigo extends Animacao{
    constructor(matriz, imagem, posicaoImagemX, larguraImagem, alturaImagem, larguraSprite, alturaSprite){
        super(matriz, imagem, posicaoImagemX, larguraImagem, alturaImagem, larguraSprite, alturaSprite);

        this.velocidade = 10;
    }

    moveInimigo(){

        this.posicaoImagemX = this.posicaoImagemX - this.velocidade;
        if(this.posicaoImagemX < -this.larguraImagem){
            this.posicaoImagemX = width;
        }
    }
}
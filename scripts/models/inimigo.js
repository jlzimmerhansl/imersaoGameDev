class Inimigo extends Animacao{
    constructor(matriz, imagem, posicaoImagemX, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, posicaoImagemX, largura, altura, larguraSprite, alturaSprite);

        this.velocidade = 50;
    }

    moveInimigo(){

        this.posicaoImagemX = this.posicaoImagemX - this.velocidade;
        if(this.posicaoImagemX < - this.largura){
            this.posicaoImagemX = width;
        }
    }
}
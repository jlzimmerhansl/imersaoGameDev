class Jogo
{
    constructor()
    {
        this.indice = 0;
        this.mapa = fita.mapa;
    }

    setup()
    {
        pontuacao = new Pontuacao();
        const background = new Cenario(imagemBackground, 10);
        const sky = new Cenario(imagemSky, 9);
        const cemitery = new Cenario(imagemCemitery, 6.75);
        const cross = new Cenario(imagemCross, 5.75);
        const grass = new Cenario(imagemGrass, 4.5);
        life = new Life(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
  
        cenarios.push(background);
        cenarios.push(sky);
        cenarios.push(cemitery);
        cenarios.push(cross);
        cenarios.push(grass);
  
        personagem = new Personagem(matrizPersonagem,imagemPersonagem, 0, 30, 230, 230, 230, 230);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 110, 70, 180, 100, 10);
        const alien = new Inimigo(matrizAlien, imagemAlien, width, 0, 240, 230, 140, 130, 10);
        const passaro = new Inimigo(matrizPassaro, imagemPassaro, width - 52, 400, 50, 70, 150, 150, 10);
  
        inimigos.push(inimigo);
        inimigos.push(alien);
        inimigos.push(passaro);

        gameOver = new Cenario(imagemGameOver, 0);
        telaInicial = new Cenario(imagemTelaInicial, 0);

    }

    keyPressed(key)
    {
        if(key === 'ArrowUp' && personagem.numeroPulos < 2)
        {
            personagem.pulaPersonagem();
            somPulo.play();
        }
    }

    draw()
    {
        cenarios.forEach(cenario => {
            cenario.exibe();
            cenario.move();
        });

        life.draw();
        
        personagem.exibe();
        personagem.aplicaGravidade();
        
        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.posicaoImagemX < - inimigo.larguraImagem;
        inimigo.velocidade = linhaAtual.velocidade;
          
        inimigo.exibe();
        inimigo.moveInimigo();

        
        if(inimigoVisivel){
          this.indice++;
          inimigo.reaparece();
          if(this.indice > this.mapa.length - 1)
          {
            this.indice = 0;
           }
        }
        
        if(personagem.colisao(inimigo)){
            life.loseLife();
            personagem.ficaInvensivel();
            if(life.lifes === 0){
                noLoop();
                gameOver.exibe(); 
            }
;           
        }
        
        pontuacao.exibePontos();
        pontuacao.adicionarPonto();
    }
}
class Jogo
{
    constructor()
    {
        this.inimigoAtual = 0;
    }

    setup()
    {
        pontuacao = new Pontuacao();
        const background = new Cenario(imagemBackground, 10);
        const sky = new Cenario(imagemSky, 9);
        const cemitery = new Cenario(imagemCemitery, 6.75);
        const cross = new Cenario(imagemCross, 5.75);
        const grass = new Cenario(imagemGrass, 4.5);
  
        cenarios.push(background);
        cenarios.push(sky);
        cenarios.push(cemitery);
        cenarios.push(cross);
        cenarios.push(grass);
  
        personagem = new Personagem(matrizPersonagem,imagemPersonagem, 0, 30, 230, 230, 230, 230);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 110, 70, 180, 100, 10, 100);
        const alien = new Inimigo(matrizAlien, imagemAlien, width, 0, 240, 230, 140, 130, 10, 100);
        const passaro = new Inimigo(matrizPassaro, imagemPassaro, width - 52, 400, 50, 70, 150, 150, 10, 100);
  
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
        
        personagem.exibe();
        personagem.aplicaGravidade();
        
        const inimigo = inimigos[this.inimigoAtual];
        const inimigoVisivel = inimigo.posicaoImagemX < - inimigo.larguraImagem;
          
        inimigo.exibe();
        inimigo.moveInimigo();
        
        if(inimigoVisivel){
          this.inimigoAtual++;
          if(this.inimigoAtual > 2)
          {
            this.inimigoAtual = 0;
           }
            inimigo.velocidade = parseInt(random(10, 30));
        }
        
        if(personagem.colisao(inimigo)){
            console.log('colidiu');
            //noLoop();
            //gameOver.exibe(); 
        }
        
        pontuacao.exibePontos();
        pontuacao.adicionarPonto();
    }
}
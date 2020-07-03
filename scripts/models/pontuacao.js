class Pontuacao{
    constructor(){
        this.pontos = 0;
    }

    exibePontos(){
        textAlign(RIGHT);
        fill('#fff'); 
        textSize(50);
        text('Tempo: ' + parseInt(this.pontos), width - 30, 50);
    }

    adicionarPonto(){
        this.pontos += 0.2;
    }
}
class Pontuacao{
    constructor(){
        this.pontos = 0;
    }

    exibePontos(){
        textFont(fontTelaInicial);
        textAlign(RIGHT);
        fill('#fff'); 
        textSize(30);
        text('Tempo: ' + parseInt(this.pontos), width - 30, 50);
    }

    adicionarPonto(){
        this.pontos += 0.2;
    }
}
class TelaInicial
{
    constructor()
    {

    }

    draw()
    {
        this._imagemFundo();
        this._texto();
        this._button();
    }

    _imagemFundo()
    {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto()
    {
        textFont(fontTelaInicial);
        textAlign(CENTER);
        fill(200);
        textSize(50);
        text('Alien vs', width / 2, height / 3);
        textSize(100);
        text('Zombies', width / 2, height / 6 * 3);
    }

    _button(){
        button.y = height / 7 * 5;
        button.draw();
    }
}
class Life
{
    constructor(total, initialLife)
    {
        this.total = total;
        this.initialLife = initialLife;
        this.lifes = this.initialLife;
        this.width = 25;
        this.height = 25;
        this.initialX = 20;
        this.y = 20;
    }

    draw()
    {
        for(let i = 0; i < this.lifes; i++)
        {
            const margin = i * 10;
            const position = this.initialX * (1 + i);
            image(imagemCoracao, position + margin, this.y, this.width, this.height);
        }
    }

    winLife()
    {
        if(this.lifes <= total)
        {
            this.lifes++;
        }
    }

    loseLife()
    {
        this.lifes--;
    }
}
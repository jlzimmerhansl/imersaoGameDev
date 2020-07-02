class Personagem
{
  constructor(imagem, alturaImagem, larguraImagem, colunasMatriz, linhasMatriz)
  {
    this.imagem     = imagem;
    this.alturaImagem     = alturaImagem;
    this.larguraImagem    = larguraImagem;    
    this.colunasMatriz = colunasMatriz;
    this.linhasMatriz = linhasMatriz;
    this.matriz     = criaMatriz(alturaImagem, larguraImagem, colunasMatriz, linhasMatriz);
    this.frameAtual = 0;    
  }

 
  exibe()
  {
    let metadeLargura = (this.largura / 2);
    let metadeAltura  = this.altura / 2;
    
    image(this.imagem, 0, height - this.alturaImagem, this.larguraImagem, this.alturaImagem, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraImagem, this.alturaImagem);
    
    this.anima();
  }
  
  anima()
  {
    this.frameAtual++;
    
    if (this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }
}
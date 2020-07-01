class Personagem
{
  constructor(imagem, altura, largura)
  {
    this.imagem     = imagem;
    this.altura     = altura;
    this.largura    = largura;    
    this.matriz     = this.calculaFrames(imagem, this.altura, this.largura);
    this.frameAtual = 0;    
  }
  
  calculaFrames(imagem, altura, largura)
  {
    let matriz = [];
    
    for (let i = 0; i < imagem.height; i += altura) {
      for (let j = 0; j < imagem.width; j += largura) {
        matriz.push([j, i]);
      }
    }
    
    return matriz;
  }
  
  exibe()
  {
    let metadeLargura = (this.largura / 2);
    let metadeAltura  = this.altura / 2;
    
    image(this.imagem, 0, height - this.altura, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.largura, this.altura);
    
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
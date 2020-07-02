function criaMatriz(larguraImagem, alturaImagem, colunasMatriz, linhasMatriz){
    let matriz = [];

    for(let i = 0; i < linhasMatriz; i++){
      for(let j = 0; j < colunasMatriz; j++){
        matriz.push([j * larguraImagem, i * alturaImagem]);
      }
    }

    return matriz;
}
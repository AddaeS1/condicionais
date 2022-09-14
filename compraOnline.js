const valorDoProduto = 100000;
const quantidadeDoParcelamento = 10;
let valorPago = 30000;
let qParcelas = quantidadeDoParcelamento - (valorPago/10000);
let valorparcelas = valorDoProduto - valorPago

console.log("Fernanda, por favor pague ",qParcelas,"de R$" ,valorparcelas.toFixed(2)/100)



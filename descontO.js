let valorProduto = 15000;
let tipoDePagamento = "cheque";
let valorFinal;

if( tipoDePagamento == "credito"){
    valorFinal = valorProduto-(valorProduto*0.05) 
        console.log("Valor a ser pago: R$", valorFinal)
            }else if(tipoDePagamento == "debito" || "dinheiro"){
                    valorFinal = valorProduto-(valorProduto*0.1)
                        console.log("Valor a ser pago: R$", valorFinal)
                            }else{
                                if(tipoDePagamento == "cheque")
                                    valorFinal = valorProduto-(valorProduto*0.03)
                                        console.log("Valor a ser pago: R$", valorFinal.toFixed(2))
                                
                            }
                        
                        
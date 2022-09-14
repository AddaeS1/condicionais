const valorCurso = 2400000
const rendaMensalEmCentavos = 100000;
const mesesDecorridos = 15;
const totalJaPagoPeloAluno = 1000000;
let parcela ; 
const valorRestante = valorCurso - totalJaPagoPeloAluno;
const mesesRestantes = 60 - mesesDecorridos;

if(rendaMensalEmCentavos < 200000){
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.")
        }else{
            if(mesesDecorridos > 60)
                console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o tempo decorrido para pagamento é maior que 60 meses(5 anos) .")
                    else{
                        if(rendaMensalEmCentavos > 200000 && mesesDecorridos < 60){
                            parcela = rendaMensalEmCentavos * 0.18;
                                console.log("O valor da parcela desse mês será de R$",parcela*0.01.toFixed(2)," a serem pagas por " , mesesRestantes ," meses, ou até chegarmos no valor total do curso .")
              
                                      }
                                   }
                                }   
            
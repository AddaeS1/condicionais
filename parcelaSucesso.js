const valorCurso = 2400000
const rendaMensalEmCentavos = 300000;
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 1000000;
let parcela ; 
const valorRestante = valorCurso - totalJaPagoPeloAluno;
const Mesesrestantes = 60 - mesesDecorridos;

if(rendaMensalEmCentavos > 200000){
    parcela = rendaMensalEmCentavos * 0.18;
    console.log("O valor da parcela desse mês será de R$",parcela*0.01.toFixed(2)," a serem pagas por " ,Mesesrestantes ," meses, ou até chegarmos no valor total do curso .")

}
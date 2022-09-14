const jogador1 = "pedra";
const jogador2 = "tesoura";

if (jogador1 === "pedra" && jogador2 === "tesoura" || jogador1 === "tesoura" && jogador2 === "papel" || jogador1 === "papel" && jogador2 === "pedra" ) {
    console.log("o Jogador1 venceu.");
}else if(jogador2 === "pedra" && jogador1 === "tesoura" || jogador2 === "tesoura" && jogador1 === "papel" || jogador2 === "papel" && jogador1 === "pedra"){
    console.log("o Jogador2 venceu.");
}else{
    console.log("Jogador1 e Jogador2 empataram !")
};




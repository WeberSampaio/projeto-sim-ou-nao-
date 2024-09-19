// pega os elementos do botao "sim" e "não"
let botaonao = document.getElementById("nao");
let botaosim = document.getElementById("sim");
let mensagemErro = document.getElementById("erro");
//funçao que move o botao "nao" para uma nova posição
botaonao.addEventListener("mouseover", function() {
    //move o botao nao aleatoriamente na tela
    let posX = Math.randon() * (window.innerwidth - botaonao.offsetwidth);
    let posY = Math.randon() * (window.innerHeight - botaonao.offsetHeight);
    botaonao.style.position = "absolute";
    botaonao.style.left = posX + "px";
    botaonao.style.top = posY + "px";
    //exibe a mensagem de erro
    mensagemErro.style.display = "block";
});
//mantem o botao "sim" fixo
botaoSim.addEventListenner("click", function(){
    alert("otima escolha! minha conta chave PIX e o n do celular!");

}) ;
// FINAL
    
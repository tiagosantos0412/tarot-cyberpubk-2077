/**
 * OBJETIVOS:
 *
 * 1 => Quando clicarmos na seta de avançar precisamos mostrar o próximo cartão da lista.
 *      - Passo 1: capturar o elemento HTML da seta avançar.
 *      - Passo 2: identificar o clique do usuário na seta avançar.
 *      - Passo 3: fazer aparecer o próximo cartão da lista.
 *      - Passo 4: buscar o cartão que está selecionado e esconder
 *
 * 2 => Quando clicarmos na seta de voltar precisamos mostrar o  cartão anterior da lista.
 *      - Passo 1: capturar o elemento HTML da seta voltar.
 *      - Passo 2: identificar o clique do usuário na seta voltar.
 *      - Passo 3: fazer aparecer o cartão anterior da lista.
 *      - Passo 4: buscar o cartão que está selecionado e esconder
 */

/* 
    1 => Quando clicarmos na seta de avançar precisamos mostrar o próximo cartão da lista.
*/

const btnAvancar = document.getElementById("btn-avancar");

const btnVoltar = document.getElementById("btn-voltar");

const cartoes = document.querySelectorAll(".cartao");

let cartaoAtual = 0;


btnAvancar.addEventListener("click", function () {

    if(cartaoAtual === cartoes.length - 1) return

    const cartaoSelecionado = document.querySelector(".selecionado"); 
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual++;
    console.log(cartaoAtual);
    cartoes[cartaoAtual].classList.add("selecionado");
    
});

btnVoltar.addEventListener("click", function () {

    if(cartaoAtual === 0) return

    const cartaoSelecionado = document.querySelector(".selecionado"); 
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual--;
    console.log(cartaoAtual);
    cartoes[cartaoAtual].classList.add("selecionado");
});




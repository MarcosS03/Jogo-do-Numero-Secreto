listaDeNumerosSorteados = [];
let limiteTamanho = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

MensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (numeroSecreto == chute) {
        exibirNaTela('h1', 'Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `parabens, Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if (chute > numeroSecreto) {
            exibirNaTela('p', 'numero secreto é menor!');
        }else{
            exibirNaTela('p', 'numero secreto é maior!');
        }
        limparCampo();
        tentativas++;
      
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteTamanho + 1);
    let tamanhoDaLista = listaDeNumerosSorteados.length;

    if (tamanhoDaLista == limiteTamanho) {
       listaDeNumerosSorteados = []; 
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}

function limparCampo(){
    chute =  document.querySelector('input');
    chute.value = ' ';
}

function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function MensagemInicial() {
    exibirNaTela('h1', 'Jodo do numero secreto');
    exibirNaTela('p', 'Escolha um numero entre 0 e 10');
    
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    MensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
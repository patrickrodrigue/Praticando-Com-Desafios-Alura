function sortear() {
    let minQuantidade = 1;
    let min = document.getElementById('de').value;
    let max = document.getElementById('ate').value;
    let numerosSorteados = [];
    let quantidadeNumero = document.getElementById('quantidade').value;

    if (!quantidadeNumero) {
        exibirMensagemAviso('aviso', 'Por favor, insira um número');
    } else {
        while (minQuantidade <= quantidadeNumero) {
            let numAleatorio = parseInt(Math.random() * (max - min) + min);
            numerosSorteados.push(numAleatorio);
            minQuantidade++
            exibirMensagemAviso('aviso', `Números sorteados: ${numerosSorteados}`);
            alterarStatusbtn();
        }
    }


}
function exibirMensagemAviso(elementId, mensagem) {
    document.getElementById(elementId).innerText = mensagem;
}

function alterarStatusbtn(){
    let btn = document.getElementById('btn-reiniciar');
    if(btn.classList.contains('container__botao-desabilitado')){
        btn.classList.remove('container__botao-desabilitado');
        btn.classList.add('container__botao');
    }else {
        btn.classList.remove('container__botao');
        btn.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('quantidade').value =  '';
    document.getElementById('aviso').innerHTML = '<label id="aviso" class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    
    alterarStatusbtn()
}
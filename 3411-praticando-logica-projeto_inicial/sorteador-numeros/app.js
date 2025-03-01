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
        }
    }

}
function exibirMensagemAviso(elementId, mensagem) {
    document.getElementById(elementId).innerText = mensagem;
}

function limpaCampo(){
    max.value = '';
    min.value = '';
    numerosSorteados = '';
}
// function reiniciar(){
//     limpaCampo();
//     document.getElementById('btn-reiniciar').setAttribute('disabled', true);
// }
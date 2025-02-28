let quantidadeNumero; ; 

function sortear() {
    quantidadeNumero = document.getElementById('quantidade').value;
    if(!quantidadeNumero){
        exibirMensagemAviso('label');
        let pedido = 'Por favor, insira um número';
        
    }
}

 
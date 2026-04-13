const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");
    function verificarListaVazia(listaDeCompras){
        const itensDaLista = listaDeCompras.querySelectorAll("li"); // Acessa todos os itens da lista utilizando querySelectorAll("li") para selecionar todos os elementos <li> dentro da lista de compras.
        if(itensDaLista.length === 0){
            mensagemListaVazia.style.display = "block"; // Se não houver itens na lista, exibe a mensagem de lista vazia.
        }else{
            mensagemListaVazia.style.display = "none"; // Caso contrário, oculta a mensagem de lista vazia.
        }
    }
    export default verificarListaVazia;

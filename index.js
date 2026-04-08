const inputItem = document.getElementById("input-item");

const botaoAdicionar = document.getElementById("adicionar-item");
let contador = 0;

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    if(inputItem.value === "") { //Se o usuário digitar um item vazio
        alert("Por favor, insira um item.");
        return; //Quando a função encontra o return, ela é interrompida e os passos seguintes não são executados.
    }

    const itemDaLista = document.createElement("li"); //document.createElement() acessa o DOM para criar um elemento dentro da árvore de elementos.
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");//Utilizamos .classList para acessar a lista de classes e o método .add para adicionar a classe.
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-"+contador++;

})

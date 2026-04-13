import gerarDiaDaSemana from "./gerarDiaDaSemana.js";  
const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDaLista() {
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
    
    const nomeItem = document.createElement("p");
    nomeItem.innerText=inputItem.value; //innerText acessa o conteúdo de texto. Assim, toda vez que alguém digitar algo no campo de digitação, o valor de inputItem será atribuido a nomeItem.

    inputCheckbox.addEventListener("click", function(){
        if(inputCheckbox.checked){
            nomeItem.style.textDecoration = "line-through"; //Se o checkbox estiver marcado, o estilo de texto do nome do item será alterado para "line-through", o que significa que o texto será riscado.
        }else{
            nomeItem.style.textDecoration = "none"; //Se o checkbox não estiver marcado, o estilo de texto do nome do item será alterado para "none", o que significa que o texto não será riscado.
        }
    })

    containerItemDaLista.appendChild(inputCheckbox);// Primeiro, precisamos associar o checkbox e o parágrafo com o container, sendo este o elemento pai.
    containerItemDaLista.appendChild(nomeItem);//Dentro dos parênteses do appendChild(), colocamos o elemento que queremos inserir no container, que será o elemento pai.
    itemDaLista.appendChild(containerItemDaLista);// Depois, associamos o container com o item da lista, sendo este o elemento pai.
    const dataCompleta = gerarDiaDaSemana();

    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}
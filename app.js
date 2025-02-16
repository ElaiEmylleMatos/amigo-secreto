//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaNomes = [];

/**
 * Adiciona um nome à lista de amigos.
 * 
 * Esta função obtém o valor do campo de entrada com o ID 'amigo'. 
 * Se o campo estiver vazio, exibe um alerta solicitando que o usuário insira um nome.
 * Caso contrário, adiciona o nome à lista de amigos, limpa o campo de entrada e atualiza a exibição da lista.
 */
function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;

    if (nome == '') {
        alert('Por favor, insira um nome.');
    } else {
        //console.log(nome);
        listaNomes.push(nome);
        document.getElementById('amigo').value = ''
        mostrarLista();
    }
}

/**
 * Função para exibir a lista de amigos na página.
 * Limpa o conteúdo atual da lista e adiciona cada nome da lista de nomes como um item de lista (li).
 */
function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < listaNomes.length; i++) {
        lista.innerHTML += '<li>' + listaNomes[i] + '</li>'
    }
}

/**
 * Sorteia um amigo da lista de nomes e exibe o resultado na página.
 * Se a lista estiver vazia, exibe um alerta informando que nenhum amigo foi adicionado.
 */
function sortearAmigo() {
    if (listaNomes.length == 0) {
        alert('Nenhum amigo adicionado.');
    } else {
        let indice = Math.floor(Math.random() * listaNomes.length);
        //console.log(indice);
        let sorteado = listaNomes[indice];
        document.getElementById('resultado').innerHTML = '<li>' + sorteado + '</li>';
    }
}
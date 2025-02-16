//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaNomes = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;

    if (nome == '') {
        alert('Por favor, insira um nome.');
    } else {
        console.log(nome);
        listaNomes.push(nome);
        document.getElementById('amigo').value = ''
        mostrarLista();
    }

}

function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < listaNomes.length; i++) {
        lista.innerHTML += '<li>' + listaNomes[i] + '</li>'
    }
}

function sortearAmigo() {
    if (listaNomes.length == 0) {
        alert('Nenhum amigo adicionado.');
    } else {
        let indice = Math.floor(Math.random() * listaNomes.length);
        console.log(indice);
        let sorteado = listaNomes[indice];
        document.getElementById('resultado').innerHTML = '<li>' + sorteado + '</li>';
    }
    /*let sorteado = listaNomes[Math.floor(Math.random() * listaNomes.length)];
    alert('Você escolheu'+ sorteado);
    listaNomes = listaNomes.filter(nome => nome!== sorteado);
    mostrarLista();*/
}
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Verifica se o nome está vazio
    if (nome === "") {
        alert("Por favor, insira um nome!");
        return;
    }

    // Verifica se o nome já foi adicionado
    if (amigos.includes(nome)) {
        alert("Opa, você já inseriu esse nome! Para ficar mais legal, insira algum nome diferente ou um sobrenome.");
        return;
    }

    // Verifica se o nome contém números
    const regex = /\d/;
    if (regex.test(nome)) {
        alert("Número não vale!");
        return;
    }
    
    // Adiciona o nome à lista de amigos
    amigos.push(nome);
    input.value = "";  // Limpa o campo de entrada

    atualizarLista();  // Atualiza a lista exibida na tela
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";  // Limpa a lista antes de atualizar

    // Cria um item de lista para cada amigo
    for (const amigo of amigos) {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

// Função para limpar o campo de entrada e reiniciar o sorteio
function limparCampo() {
    document.getElementById('amigo').value = '';  // Limpa o campo de entrada
    amigos = [];  // Limpa a lista de amigos
    atualizarLista();  // Atualiza a lista exibida
    document.querySelector('.novoSorteio').style.display = 'none';  // Esconde a mensagem de novo sorteio
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';  // Limpa o resultado do sorteio
    alert("Vamos fazer um novo sorteio?!");  // Alerta para reiniciar o sorteio
}

// Evento para escutar as teclas pressionadas (Enter e Escape)
document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        adicionarAmigo();  // Adiciona amigo se pressionar Enter
    }
    
    if (event.key === "Escape") {
        limparCampo();  // Limpa a lista e o sorteio se pressionar Escape
    }
});

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se há amigos suficientes para realizar o sorteio
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';  // Limpa o resultado anterior

    let listaSorteio = [...amigos];  // Cria uma cópia da lista de amigos

    // Sorteia um amigo aleatoriamente
    let sorteadoIndex = Math.floor(Math.random() * listaSorteio.length);
    let amigoSorteado = listaSorteio[sorteadoIndex];

    // Exibe o amigo sorteado na tela
    const li = document.createElement('li');
    li.textContent = amigoSorteado;
    resultado.appendChild(li);

    // Exibe a mensagem de novo sorteio
    document.querySelector('.novoSorteio').style.display = 'block';
}

const enterBtn = document.getElementById('btn');     //Seleciona os elementos html 
const input = document.getElementById('nova-tarefa');
const ul = document.getElementById('lista-tarefas');
const novoItem = document.getElementsByTagName('li');

function salvarTarefas() { //Função responsavel por salvar as tarefas no local scorage 
    const tarefas = [];
    const liItems = ul.getElementsByTagName('li'); //Seleciona todas 'li' dentro da 'ul' e armazana dentro da faviavel liItems
    for (const item of liItems) { //Loop para iterar sobre cada elemento 'li' dentro de liItems
        const tarefaTexto = item.querySelector('span').textContent; //Seleciona o primeiro elemento 'span' dentro de 'li' e armazena o conteudo na variavel tarefaTexto
        tarefas.push(tarefaTexto); //Aqie adicionamos a o conteudo da tarefaTexto dentro do array tarefas
    }
    localStorage.setItem('tarefas', JSON.stringify(tarefas)); //Aque é feita a conversão do array tarefas para JSON e o armazenamento no local storage com a chave 'tarefas'
}


function carregarTarefas() { //Função responsavel por carregar o que foi salvo pela função anterior
    const tarefas = JSON.parse(localStorage.getItem('tarefas')); //Aqui recuperamos o JSON armazenado no local storage com a chave 'tarefa', converte de volta e armazena no array 'tarefas'
    if (tarefas) { // verificação para saber se o array é null
        for (const tarefa of tarefas) { //loop para iterar sobre cada item do array 'tarefas'
            input.value = tarefa; //Acessamos o input.value e armazenamos o array 'tarefas'
            criaNovoElemento();
        }
    }
}

function tamanhoInputUser() {
    return input.value.length; //função que retora o tamanho do input do usuario
}

function deleteItem(event) { //Função para deletar items da lista
    if (confirm('Tem certeza que deseja excluir essa tarefa ?')) { //Aqui fazemos a comfirmação se o usuário tem certeza que deseja excluir o item                                  
        event.target.parentElement.remove();//Remove o elemento 'li'
        salvarTarefas();//Atualiza o local storage chamando a função
    }
}

function editarTarefa(elemento) {
    const novoTexto = prompt('Editar tarefa:', elemento.textContent); //exibe uma caixa de diálogo para o usuario editar a tarefa
    if (novoTexto !== null && novoTexto.trim() !== '') { //Aqui verificamos se o texto inserido pelo usuario é diferente de null e vazio
        elemento.textContent = novoTexto.trim(); //Atualiza o texto da tarefa
        salvarTarefas(); //Armazenamos as alterações no local storage
    }
}

function criaNovoElemento() {
    const newLi = document.createElement('li'); //Aqui criamos um novo elemento 'li'
    const span = document.createElement('span'); //E aqui um span
    span.textContent = input.value; //Passanmos o input do usuario para o elemento span
    newLi.appendChild(span); //Anexa o elemento span a 'li'
    ul.appendChild(newLi); //E aqui anexamos a 'li' a 'ul'
    input.value = ''; //Aqui limpamos o campo de input do usuário

    const deleteBtn = document.createElement('button'); //Cria um botão para excluir 
    deleteBtn.appendChild(document.createTextNode('X'));//Aqui definimos o texto do botão criado como um 'X'
    newLi.appendChild(deleteBtn);//Anexa o botão de excusão a 'li'
    deleteBtn.addEventListener('click', deleteItem);//Adição do evendo de click no botão de exclusão e chama a função deletaItem

    const editar = document.createElement('button'); //Criação do botão para editar tarefa
    editar.textContent = 'Editar'; //Define o nome do botão como Editar
    editar.className = 'editar'; //Adiciona a classe de editar ao botão
    editar.addEventListener('click', function () { //Adição do evento de click ao botão de edição
        editarTarefa(span);                        //que chama a função editarTarefa
    });
    newLi.appendChild(editar); //Anexa o botão de edição ao elemento 'li'
    salvarTarefas(); //chamamos a função para atualizar a lista de tarefas no local storage
}

enterBtn.addEventListener('click', addListaClick);  //Evento de click para envio 
input.addEventListener('keypress', addListaKeypress); //Evento de enter para envio

function addListaClick(event) { //Função para click do envio do item a lista
    event.preventDefault(); //Cancela o comportamento padrão do evento de click
    if (tamanhoInputUser() >= 1) { //Verificação se o input do usuário é maior que zero
        criaNovoElemento();//Chamamos a função para criar um novo elemento na lista
    }
}

function addListaKeypress(event) { //Função para envio do item com a tecla enter
    if (tamanhoInputUser() >= 1 && event.keyCode === 13) { //Verificação se o input do usuário é maior que zero e se foi precionada a tecla enter
        event.preventDefault();//Cancela o comportamento padrão do evento de tecla
        criaNovoElemento();//Chamamos a função para criar um novo elemento na lista
    }
}

carregarTarefas()
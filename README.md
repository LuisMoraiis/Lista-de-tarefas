# Lista-de-tarefas

## Este aplicativo é uma simples lista de tarefas que permite adicionar, editar e excluir tarefas. As tarefas são armazenadas no local storage do navegador para que elas persistam mesmo após o fechamento ou atualização da página.

### Funcionalidades
Adicionar tarefas através do campo de input e do botão "Enter" ou pressionando a tecla "Enter".
Editar tarefas clicando no botão "Editar" ao lado de cada tarefa.
Excluir tarefas clicando no botão "X" ao lado de cada tarefa.
Armazenar e recuperar tarefas do armazenamento local do navegador.

### Código
O aplicativo é construído utilizando HTML, JavaScript e CSS basico. O JavaScript é responsável por gerenciar as tarefas e interagir com o armazenamento local do navegador.

### Funções
salvarTarefas(): Salva a lista atual de tarefas no armazenamento local do navegador.
carregarTarefas(): Carrega e exibe as tarefas salvas no armazenamento local quando a página é carregada.
tamanhoInputUser(): Retorna o comprimento do valor do campo de input (número de caracteres).
deleteItem(event): Exclui uma tarefa após a confirmação do usuário e atualiza o armazenamento local.
editarTarefa(elemento): Permite ao usuário editar uma tarefa e salva as alterações no armazenamento local.
criaNovoElemento(): Cria e adiciona um novo elemento à lista de tarefas, incluindo botões de exclusão e edição.
addListaClick(event): Adiciona uma nova tarefa à lista quando o botão "Enter" é clicado.
addListaKeypress(event): Adiciona uma nova tarefa à lista quando a tecla "Enter" é pressionada.
### Como usar
Abra o aplicativo no navegador.
Digite uma tarefa no campo de input.
Pressione "Enter" no teclado ou clique no botão "Enter" para adicionar a tarefa à lista.
Clique no botão "X" ao lado de uma tarefa para excluí-la.
Clique no botão "Editar" ao lado de uma tarefa para editá-la.

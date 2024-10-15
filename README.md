```markdown
# To Do List Project

## Descrição
Este é um projeto de lista de tarefas simples, desenvolvido com Node.js, Express e EJS. O objetivo é gerenciar tarefas, permitindo criar, atualizar, excluir e listar todas as tarefas.

## Funcionalidades
- Adicionar tarefas
- Atualizar tarefas
- Excluir tarefas
- Listar todas as tarefas

## Tecnologias Utilizadas
- Node.js
- Javascript
- Express
- EJS
- MongoDB
- Azure Blob Storage
- Azure Devops
- HTML/CSS


## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/KauaneAlmeida/to-do-list.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd seu-repositorio
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   AZURE_STORAGE_CONNECTION_STRING=your_connection_string
   ```
5. Inicie o servidor:
   ```bash
   npm start
   ```

Deploy e Cloud Computing
A aplicação foi implantada na plataforma de nuvem Azure e está acessível publicamente via HTTPS.

Serviço de Armazenamento em Nuvem
Os arquivos estáticos são gerenciados utilizando o Azure Blob Storage.

## Problemas Encontrados e Soluções

### Problema 1: Formulário não estava enviando dados corretamente
**Solução:** Adicionado atributo `method="post"` no formulário de criação de tarefas.

### Problema 2: Confirmação de exclusão
**Solução:** Adicionado script de confirmação antes de apagar uma tarefa.

### Problema 3: Conexão com o banco de dados
**Solução:** Configuração de variáveis de ambiente.

### Problema 4: Parseamento de JSON
**Solução:** Adicionado middleware `express.json()`.

### Problema 5: Parseamento de dados de formulários
**Solução:** Adicionado middleware `express.urlencoded()`.

### Problema 6: Mensagem não desaparecia automaticamente
**Solução:** Adicionado `setTimeout` para ocultar a mensagem após 5 segundos.

### Problema 7: Upload de arquivos falhava
**Solução:** Verificação da conexão e leitura do arquivo antes do upload.

### Problema 8: Dados inválidos ao criar tarefa
**Solução:** Verificação de campos obrigatórios antes de criar a tarefa.

### Problema 9: Atualização de tarefa não persistia
**Solução:** Correção na lógica de atualização.

### Problema 10: Exclusão de tarefa falhava
**Solução:** Implementação de confirmação de exclusão.

### Problema 11: Dados não carregavam corretamente ao buscar por ID
**Solução:** Ajuste na função de busca por ID.

## Como Contribuir
1. Faça um fork do projeto.
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-nova-feature
   ```
3. Faça suas alterações e commit:
   ```bash
   git commit -m 'Adiciona nova feature'
   ```
4. Envie para o branch original:
   ```bash
   git push origin minha-nova-feature
   ```
5. Crie um pull request.

## Licença
Este projeto está licenciado sob a Licença MIT.

## Agradecimentos
Agradeço a todos que contribuíram para este projeto.
```

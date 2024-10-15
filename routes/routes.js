const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

// Create
routes.post("/create", TaskController.createTask); /* Problema: Erro ao criar tarefa
                                                      Solução: Verificação de dados no controlador */

// Read
routes.get("/", TaskController.getAllTasks); /* Problema: Falha ao recuperar tarefas
                                                Solução: Ajuste na consulta ao banco de dados */

// Update
routes.post("/update-task/:id", TaskController.updateTask); /* Problema: Atualização não persistia
                                                               Solução: Correção na lógica de atualização */
                                                               
routes.get("/getById/:id", TaskController.getById);     /* Problema: Dados não carregavam corretamente
                                                       Solução: Ajuste na função de busca por ID */

// Delete
routes.post("/delete-task/:id", TaskController.deleteTask); /* Problema: Exclusão falhava
                                                               Solução: Implementação de confirmação de exclusão */

module.exports = routes;


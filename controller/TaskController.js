const Task = require("../models/Task");

const message = "";
let type = "";

const getAllTasks = async (req, res) => {
  try {
    const tasksList = await Task.find();
    return res.render("index", { tasksList, task: null, error: "" });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

/* Problema: Dados inválidos ao criar tarefa
   Solução: Verificação de campos obrigatórios antes de criar a tarefa */
const createTask = async (req, res) => {
  const taskData = req.body;

  if (!("task" in taskData) || !("check" in taskData) || taskData.task === "") {
    const tasksList = await Task.find();
    return res.render("index", { tasksList, task: null, error: "Dados Inválidos!" });
  }

  try {
    await Task.create(taskData);
    return res.redirect("/");
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

/* Problema: Atualização de tarefa não persistia
   Solução: Correção na lógica de atualização */
const updateTask = async (req, res) => {
  try {
    const taskData = req.body;

    if (!("task" in taskData) || !("check" in taskData)) {
      return res.redirect("/");
    }

    await Task.updateOne(
      { _id: req.params.id },
      { task: taskData.task, check: taskData.check }
    );

    return res.redirect("/");
  } catch (e) {
    return res.status(500).redirect("/");
  }
};

/* Problema: Exclusão de tarefa falhava
   Solução: Implementação de confirmação de exclusão */
const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    await Task.deleteOne({ _id: taskId });
    message = "Tarefa apagada com sucesso!";
    type = "sucesso";
    const tasksList = await Task.find();
    return res.render("index", { tasksList, task: null, error: "" });
  } catch (e) {
    return res.status(500).redirect("/");
  }
};

/* Problema: Dados não carregavam corretamente ao buscar por ID
   Solução: Ajuste na função de busca por ID */
const getById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    const tasksList = await Task.find();
    res.render("index", { task, tasksList, error: "" });
  } catch (err) {
    return res.status(500).redirect("/");
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getById,
};



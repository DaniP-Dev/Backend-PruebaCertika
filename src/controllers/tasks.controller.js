const tasksService = require("../services/tasks.service");

function createTask(req, res, next) {
  try {
    const task = tasksService.createTask(req.body || {});
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
}

function listTasks(_req, res, next) {
  try {
    const tasks = tasksService.listTasks();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
}

function getTaskById(req, res, next) {
  try {
    const task = tasksService.getTaskById(req.params.id);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
}

function updateTask(req, res, next) {
  try {
    const task = tasksService.updateTask(req.params.id, req.body || {});
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
}

function completeTask(req, res, next) {
  try {
    const task = tasksService.completeTask(req.params.id);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
}

function deleteTask(req, res, next) {
  try {
    tasksService.deleteTask(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createTask,
  listTasks,
  getTaskById,
  updateTask,
  completeTask,
  deleteTask,
};

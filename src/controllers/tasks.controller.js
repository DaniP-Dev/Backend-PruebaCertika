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
    const taskId = Number(req.params.id);
    const task = tasksService.getTaskById(taskId);

    if (!task) {
      res.status(404).json({
        error: "TaskNotFound",
        message: "Task not found",
      });
      return;
    }

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createTask,
  listTasks,
  getTaskById,
};
